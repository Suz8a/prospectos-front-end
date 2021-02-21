import React from "react";
import FormSection from "../../components/form-section";
import Card from "../../elements/card";
import {
  prospectData,
  datosPersonales,
  direccion,
  contacto,
} from "../../constants";
import { useState } from "react";
import FormSectionItemsList from "../../components/form-section-items-list";
import AddIcon from "@material-ui/icons/Add";
import { Button, Grid } from "@material-ui/core";
import FileUploader from "../../modules/file-uploader";
import { FileType } from "../../components/drop-file-area";

function ProspectForm() {
  const [openModal, setOpenModal] = useState(false);
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
    documentos: [{ name: "holi", url: "url" }],
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) {
    setFormData({ ...formData, [id]: e.target.value });
  }

  function onClickEnviar() {
    console.log("click enviar");
  }

  function onClickCancelar() {
    console.log("click cancelar");
  }

  function onDeleteItem(index: number) {
    console.log(index);
    const newData = { ...formData };
    newData.documentos.splice(index, 1);
    console.log(newData);
    setFormData(newData);
  }

  function onAgregarDocumento() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function onClickSubirArchivo(item: FileType, name: string) {
    console.log(item);
    console.log(name);
    const newData = { ...formData };
    newData.documentos.push({ name: name, url: item.preview });
    closeModal();
  }

  return (
    <Card width="80%" height="80%" padding="30px" borderRadius="5px">
      <FileUploader
        open={openModal}
        onClickSubir={(item, name) => onClickSubirArchivo(item, name)}
        onClickCancelar={closeModal}
      />
      <FormSection
        currentValues={formData}
        title="Datos personales"
        requiredData={datosPersonales}
        onChange={(e, id) => onChange(e, id)}
      />
      <FormSection
        currentValues={formData}
        title="Dirección"
        requiredData={direccion}
        onChange={(e, id) => onChange(e, id)}
      />
      <FormSection
        currentValues={formData}
        title="Contacto"
        requiredData={contacto}
        onChange={(e, id) => onChange(e, id)}
      />

      <FormSectionItemsList
        buttonText="AGREGAR DOCUMENTO"
        icon={<AddIcon color="primary" />}
        items={formData.documentos.map((documento) => documento.name)}
        onDeleteItem={(index) => onDeleteItem(index)}
        onButtonClick={() => onAgregarDocumento()}
        padding="16px 0 30px 16px"
      />

      <Grid container spacing={3} justify="flex-end">
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
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProspectForm;
