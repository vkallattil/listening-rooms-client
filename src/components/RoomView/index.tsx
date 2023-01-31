import React from "react";
import { Room } from "../../types/interface";

interface RoomViewProps {
  rooms: Room[];
}

function RoomView({ rooms }: RoomViewProps) {
  const room = rooms.find((room) => room.id === "1");
  return <div>{room.label}</div>;
}

export default RoomView;
