import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewListIcon from "@material-ui/icons/ViewList";

export const sideBarOptions = [
  { option: "Nuevo prospecto", icon: <PersonAddIcon />, url: "/prospects/new" },
  { option: "Prospectos", icon: <ViewListIcon />, url: "/prospects" },
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
  documentos: { name: string; url: string }[];
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
    required: true,
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
