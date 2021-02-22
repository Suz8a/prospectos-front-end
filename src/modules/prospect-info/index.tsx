import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InfoSection from "../../components/info-section";
import { prospectData } from "../../constants";
import Card from "../../elements/card";
import { useParams } from "react-router-dom";
import { getProspect } from "../../api";
import { LoadingContainer } from "./styled";
import InfoSectionItemsList from "../../components/info-section-items-list";

type ProspectInfoProps = {
  onAutorizar: () => void;
  onRechazar: () => void;
};

function ProspectInfo({ onAutorizar, onRechazar }: ProspectInfoProps) {
  const [loading, setLoading] = useState(false);
  const [prospect, setProspect] = useState<
    (prospectData & { id: string; estatus: string }) | undefined
  >(undefined);
  const { id } = useParams() as any;
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

  useEffect(() => {
    (async () => {
      setLoading(true);
      setProspect(await getProspect(id));
      setLoading(false);
    })();
  }, [setProspect, id]);

  return (
    <Card width="80%" height="80%" padding="30px" borderRadius="5px">
      <Grid container spacing={2}>
        {!loading ? (
          <>
            <Grid item xs={12}>
              <InfoSection title="Datos personales" data={datosPersonales} />
            </Grid>
            <Grid item xs={12}>
              <InfoSection title="Dirección" data={direccion} />
            </Grid>
            <Grid item xs={12}>
              <InfoSection title="Contacto" data={contacto} />
            </Grid>
            <Grid item xs={12}>
              <InfoSectionItemsList items={prospect?.documentos} />
            </Grid>
          </>
        ) : (
          <LoadingContainer>
            <CircularProgress size="40px" />
          </LoadingContainer>
        )}
      </Grid>
    </Card>
  );
}

export default ProspectInfo;
