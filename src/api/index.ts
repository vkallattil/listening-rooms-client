import axios from "axios";
import { Room } from "../utils/types";

console.log(process.env.REACT_APP_API_URL);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

export function putRoom(room: Room) {
  return api.put(`/rooms/${room.id}`, room);
}
