import React from "react";
import FormSection from "../../components/info-section";
import Card from "../../elements/card";
import {
  prospectData,
  datosPersonales,
  direccion,
  contacto,
} from "../../constants";
import { useState } from "react";

function NewProspect() {
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
      {console.log(formData)}
    </Card>
  );
}

export default NewProspect;
