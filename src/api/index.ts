import axios from "axios";
import { Config } from "../config";
import { prospectData } from "../constants";

export const http = axios.create({ baseURL: Config.apiUrl });

export async function getPropspects() {
  const response = await http.get("/prospects");
  return response.data;
}

export async function getProspect(id: string) {
  const response = await http.get(`/prospects/${id}`);
  return response.data;
}

export async function uploadFile(file: File) {
  const form = new FormData();
  form.append("file", file);
  const response = await http.post("/files/upload", form, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return response.data.url;
}

export async function createProspect(prospect: prospectData) {
  const response = await http.post("/prospects", prospect);
  return response.data;
}

export async function updateProspectStatusById(
  id: string,
  status: "autorizado" | "rechazado",
  motivoRechazo: string
) {
  const response = await http.patch(`/prospects/${id}/status`, {
    status,
    motivoRechazo,
  });
  return response.data.n > 0 ? "ok" : "failed";
}
