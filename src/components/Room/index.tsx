import React from "react";

interface RoomProps {
  rooms: { id: string; label: string }[];
}

function Room({ rooms }: RoomProps) {
  const room = rooms.find((room) => room.id === "1");
  return <div>{room.label}</div>;
}

export default Room;
