import React from "react";
import { Room } from "../../types/room";
import "./index.css";
import RoomSelectionButton from "./RoomSelectionButton";

/* RoomSelection component definition */
interface RoomSelectionProps {
  rooms: Array<Room>;
}
function RoomSelection({ rooms }: RoomSelectionProps) {
  return (
    <>
      {rooms.map(({ label, id }) => (
        <>
          <RoomSelectionButton key={id} id={id} label={label} />
        </>
      ))}
    </>
  );
}

export default RoomSelection;
