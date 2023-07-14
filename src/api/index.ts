import axios from "axios";
import { Room } from "../utils/types";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

export function getRooms() {
  return api.get("/rooms");
}

export function getRoom(id: string) {
  return api.get(`/rooms/${id}`);
}

export function postRoom(room: Room) {
  return api.post("/rooms", room);
}

export function deleteRoom(id: string) {
  return api.delete(`/rooms/${id}`);
}
