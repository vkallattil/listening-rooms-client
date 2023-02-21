import React from "react";
import { Room } from "../../types";
import RoomSelectionButton from "./RoomSelectionButton";

interface RoomSelectionProps {
  rooms: Room[];
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

export default RoomSelection