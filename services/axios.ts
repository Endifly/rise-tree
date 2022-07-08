import axios from "axios";

export const contentInstance = axios.create({
  baseURL: "https://content.tanakorn.space/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
