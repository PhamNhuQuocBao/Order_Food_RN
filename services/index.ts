import axios from "axios";

export const APIs = axios.create({
  baseURL: "http://192.168.1.7:6789/",
  timeout: 3000,
});
