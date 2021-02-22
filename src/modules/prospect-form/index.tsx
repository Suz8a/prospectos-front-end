import React from "react";
import FormSection from "../../components/form-section";
import Card from "../../elements/card";
import {
  prospectData,
  datosPersonales,
  direccion,
  contacto,
  prospectInitialData,
} from "../../constants";
import { useState } from "react";
import FormSectionItemsList from "../../components/form-section-items-list";
import AddIcon from "@material-ui/icons/Add";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import FileUploader from "../../modules/file-uploader";
import { FileType } from "../../components/drop-file-area";
import { createProspect, uploadFile } from "../../api";
import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProspectForm() {
  const [alertSeverity, setAlertSeverity] = useState<Color>("success");
  const [openNotification, setOpenNotification] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<prospectData>({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    calle: "",
    numero: "",
    colonia: "",
    codigoPostal: "",
    telefono: "",
    rfc: "",
    documentos: [],
  });

  const alertMessages: { [key: string]: string } = {
    success: "Prospecto enviado con exito",
    error: "Error en enviar prospecto",
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const showSuccessMessage = () => {
    setAlertSeverity("success");
    setOpenNotification(true);
  };
  const showErrorMessage = () => {
    setAlertSeverity("error");
    setOpenNotification(true);
  };

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) {
    setFormData({ ...formData, [id]: e.target.value });
  }

  async function onClickEnviar() {
    try {
      setLoading(true);
      await createProspect(formData);
      cleanForm();
      setLoading(false);
      showSuccessMessage();
    } catch {
      console.log("error en crear prospecto");
      showErrorMessage();
      setLoading(false);
    }
  }

  function onClickCancelar() {
    console.log("click cancelar");
  }

  function onDeleteItem(index: number) {
    const newData = { ...formData };
    newData.documentos.splice(index, 1);
    setFormData(newData);
  }

  function onAgregarDocumento() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function cleanForm() {
    setFormData(prospectInitialData);
  }

  async function onClickSubirArchivo(item: FileType, name: string) {
    const newData = { ...formData };
    setModalLoading(true);
    newData.documentos.push({ name: name, url: await uploadFile(item) });
    setModalLoading(false);

    if (!modalLoading) closeModal();
  }

  return (
    <Card width="80%" height="80%" padding="30px" borderRadius="5px">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FileUploader
            open={openModal}
            onClickSubir={(item, name) => onClickSubirArchivo(item, name)}
            onClickCancelar={closeModal}
            loading={modalLoading}
          />
        </Grid>

        <Grid item xs={12}>
          <FormSection
            currentValues={formData}
            title="Datos personales"
            requiredData={datosPersonales}
            onChange={(e, id) => onChange(e, id)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormSection
            currentValues={formData}
            title="Dirección"
            requiredData={direccion}
            onChange={(e, id) => onChange(e, id)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormSection
            currentValues={formData}
            title="Contacto"
            requiredData={contacto}
            onChange={(e, id) => onChange(e, id)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormSectionItemsList
            buttonText="AGREGAR DOCUMENTO"
            icon={<AddIcon color="primary" />}
            items={formData.documentos.map((documento) => documento.name)}
            onDeleteItem={(index) => onDeleteItem(index)}
            onButtonClick={() => onAgregarDocumento()}
            padding="16px 0"
          />
        </Grid>

        <Grid container item spacing={3} justify="flex-end">
          <Grid item xs={3}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => onClickCancelar()}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => onClickEnviar()}
              disabled={JSON.stringify(formData).includes('""') || loading}
            >
              {loading ? <CircularProgress size={"25px"} /> : "Enviar"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alertSeverity}>
          {alertMessages[alertSeverity]}
        </Alert>
      </Snackbar>
    </Card>
  );
}

export default ProspectForm;
