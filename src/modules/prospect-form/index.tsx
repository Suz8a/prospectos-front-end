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
import { Grid } from "@material-ui/core";

function ProspectForm() {
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

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) {
    setFormData({ ...formData, [id]: e.target.value });
  }

  return (
    <Card width="80%" height="80%" padding="30px" borderRadius="5px">
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormSectionItemsList />
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProspectForm;
