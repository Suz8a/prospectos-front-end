import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewListIcon from "@material-ui/icons/ViewList";

export const evaluadorSideBarOptions = [
  { option: "Prospectos", icon: <ViewListIcon />, url: "/main/prospects" },
];

export const promotorSideBarOptions = [
  { option: "Prospectos", icon: <ViewListIcon />, url: "/main/prospects" },

  {
    option: "Nuevo prospecto",
    icon: <PersonAddIcon />,
    url: "/main/prospects/new",
  },
];

export type prospectData = {
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  calle: string;
  numero: string;
  colonia: string;
  codigoPostal: string;
  telefono: string;
  rfc: string;
  motivoRechazo?: string;
  documentos: { name: string; url: string }[];
};

export const prospectInitialData = {
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
};

export const datosPersonales = [
  {
    id: "nombre",
    title: "Nombre",
    required: true,
    type: "string",
  },
  {
    id: "primerApellido",
    title: "Apellido paterno",
    required: true,
    type: "string",
  },
  {
    id: "segundoApellido",
    title: "Apellido materno",
    required: false,
    type: "string",
  },
  {
    id: "rfc",
    title: "RFC",
    required: true,
    type: "string",
  },
];

export const direccion = [
  {
    id: "calle",
    title: "Calle",
    required: true,
    type: "string",
  },
  {
    id: "numero",
    title: "Número",
    required: true,
    type: "number",
  },
  {
    id: "colonia",
    title: "Colonia",
    required: true,
    type: "string",
  },
  {
    id: "codigoPostal",
    title: "Código Postal",
    required: true,
    type: "number",
  },
];

export const contacto = [
  {
    id: "telefono",
    title: "Teléfono",
    required: true,
    type: "number",
  },
];
