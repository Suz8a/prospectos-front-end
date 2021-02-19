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
  documentos: {}[];
};

export const datosPersonales = [
  {
    id: "nombre",
    title: "Nombre",
    required: false,
    type: "string",
  },
  {
    id: "primerApellido",
    title: "Apellido paterno",
    required: false,
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
    required: false,
    type: "string",
  },
];

export const direccion = [
  {
    id: "calle",
    title: "Calle",
    required: false,
    type: "string",
  },
  {
    id: "numero",
    title: "Número",
    required: false,
    type: "number",
  },
  {
    id: "colonia",
    title: "Colonia",
    required: false,
    type: "string",
  },
  {
    id: "codigoPostal",
    title: "Código Postal",
    required: false,
    type: "number",
  },
];

export const contacto = [
  {
    id: "telefono",
    title: "Teléfono",
    required: false,
    type: "number",
  },
];
