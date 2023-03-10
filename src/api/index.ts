import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

export function getRooms() {
  return api.get("/rooms");
}

export function getRoom(id: string) {
  return api.get(`/rooms/${id}`);
}