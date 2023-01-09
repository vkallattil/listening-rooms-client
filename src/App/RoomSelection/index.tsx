import React from "react";
import { Room } from "../../types/room";
import "./index.css"

/* RoomSelectionButton component definition */
interface RoomSelectionButtonProps {
  key?: string,
  label?: string,
}
function RoomSelectionButton({ label }: RoomSelectionButtonProps) {
  return <button className="room-selection-button">{label}</button>
}

/* RoomSelection component definition */
interface RoomSelectionProps {
  rooms: Array<Room>;
}
function RoomSelection({ rooms }: RoomSelectionProps) {
  return (
    <>
      {rooms.map(({ label, id }) => (
        <RoomSelectionButton key={id} label={label} />
      ))}
    </>
  );
}

export default RoomSelection;
