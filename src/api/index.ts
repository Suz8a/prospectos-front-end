import axios from "axios";
import { Config } from "../config";

export const http = axios.create({ baseURL: Config.apiUrl });

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
