import { Room } from "../types/interface";

const rooms = [
  { id: "1", label: "Room 1" },
  { id: "2", label: "Room 2" },
  { id: "3", label: "Room 3" },
  { id: "4", label: "Room 4" },
  { id: "5", label: "Room 5" },
  { id: "6", label: "Room 6" },
  { id: "7", label: "Room 7" },
  { id: "8", label: "Room 8" },
];

export function getRoom(id: string): Room {
  return rooms.find((room) => room.id === id);  
}

export function getRooms(): Room[] {
  return rooms;
}
