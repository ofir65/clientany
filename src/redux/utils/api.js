import axios from "axios";

export const api = axios.create({
  baseURL: "https://life-92a9a.web.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});
