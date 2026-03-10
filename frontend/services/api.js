import axios from "axios";

// Use your Render backend URL here
const API = axios.create({
  baseURL: "https://milking-tracker-ui8g.onrender.com"
});

export const saveSession = (data) => API.post("/sessions", data);

export const getSessions = () => API.get("/sessions");