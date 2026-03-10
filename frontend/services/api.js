import axios from "axios";

// Change this to your Render backend link
const API = axios.create({
  baseURL: "https://milking-tracker-ui8g.onrender.com"
});

export const saveSession = (data) => API.post("/sessions", data);

export const getSessions = () => API.get("/sessions");