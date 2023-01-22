import React from "react";
import { Room } from "./room-interface";
import "./index.css";
import RoomSelectionButton from "./RoomSelectionButton";

interface RoomSelectionProps {
  rooms: Array<Room>;
}

function RoomSelection({ rooms }: RoomSelectionProps) {
  return (
    <>
      {rooms.map(({ label, id }) => (
        <RoomSelectionButton key={id} id={id} label={label} />
      ))}
    </>
  );
}

export default RoomSelection;
