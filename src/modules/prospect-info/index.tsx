import { Button, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InfoSection from "../../components/info-section";
import { prospectData } from "../../constants";
import Card from "../../elements/card";
import { useParams } from "react-router-dom";
import { getProspect, updateProspectStatusById } from "../../api";
import { LoadingContainer } from "./styled";
import InfoSectionItemsList from "../../components/info-section-items-list";
import { useHistory } from "react-router-dom";
import ModalRechazo from "../modal-rechazo";

function ProspectInfo() {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [prospect, setProspect] = useState<
    (prospectData & { id: string; estatus: string }) | undefined
  >(undefined);
  const { id } = useParams() as any;
  const history = useHistory();
  const datosPersonales: { title: string; value: string | undefined }[] = [
    {
      title: "Nombre",
      value: prospect?.nombre,
    },
    {
      title: "Apellido paterno",
      value: prospect?.primerApellido,
    },
    {
      title: "Apellido materno",
      value: prospect?.segundoApellido,
    },
    {
      title: "RFC",
      value: prospect?.rfc,
    },
  ];

  const direccion: { title: string; value: string | undefined }[] = [
    {
      title: "Calle",
      value: prospect?.calle,
    },
    {
      title: "Número",
      value: prospect?.numero,
    },
    {
      title: "Colonia",
      value: prospect?.colonia,
    },
    {
      title: "Coóigo postal",
      value: prospect?.codigoPostal,
    },
  ];

  const contacto: { title: string; value: string | undefined }[] = [
    {
      title: "Teléfono",
      value: prospect?.calle,
    },
  ];

  const estatus: { title: string; value: string | undefined }[] = [
    {
      title: "Estatus",
      value: prospect?.estatus,
    },
  ];

  const motivoRechazo: { title: string; value: string | undefined }[] = [
    {
      title: "Motivo del Rechazo",
      value: prospect?.motivoRechazo,
    },
  ];

  useEffect(() => {
    (async () => {
      setLoading(true);
      setProspect(await getProspect(id));
      setLoading(false);
    })();
  }, [setProspect, id]);

  async function onClickAutorizar() {
    setLoading(true);
    await updateProspectStatusById(id, "autorizado", "");
    history.push("/prospects");
    setLoading(false);
  }
  function onClickRechazar() {
    setOpenModal(true);
  }
  async function onClickModalAceptar(motivoRechazo: string) {
    setLoading(true);
    await updateProspectStatusById(id, "rechazado", motivoRechazo);
    history.push("/prospects");
    setLoading(false);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <Card width="80%" height="80%" padding="30px" borderRadius="5px">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModalRechazo
            open={openModal}
            onClickAceptar={(motivoRechazo) =>
              onClickModalAceptar(motivoRechazo)
            }
            onClickCancelar={closeModal}
          />
        </Grid>
        {prospect ? (
          <>
            <Grid item xs={12}>
              <InfoSection
                xs={4}
                title="Datos personales"
                data={datosPersonales}
              />
            </Grid>
            <Grid item xs={12}>
              <InfoSection xs={4} title="Dirección" data={direccion} />
            </Grid>
            <Grid item xs={12}>
              <InfoSection xs={4} title="Contacto" data={contacto} />
            </Grid>
            {prospect?.estatus !== "enviado" && (
              <Grid item xs={12}>
                <InfoSection xs={4} title="Estatus" data={estatus} />
              </Grid>
            )}
            {prospect?.estatus === "rechazado" && (
              <Grid item xs={12}>
                <InfoSection
                  title="Estatus"
                  data={motivoRechazo}
                  multiline={true}
                  rows={6}
                  xs={12}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <InfoSectionItemsList items={prospect?.documentos} />
            </Grid>
          </>
        ) : (
          <LoadingContainer>
            <CircularProgress size="40px" />
          </LoadingContainer>
        )}
        {prospect?.estatus === "enviado" && (
          <Grid container item spacing={3} justify="flex-end">
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => onClickRechazar()}
                disabled={loading}
              >
                {loading ? <CircularProgress size={"25px"} /> : "Rechazar"}
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => onClickAutorizar()}
                disabled={loading}
              >
                {loading ? <CircularProgress size={"25px"} /> : "Autorizar"}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Card>
  );
}

export default ProspectInfo;
