import React from "react";
import { Room } from "../../types/room";
import "./index.css"

/* RoomSelectionButton component definition */
interface RoomSelectionButtonProps {
  id: string,
  label?: string,
}
function RoomSelectionButton({ label, id }: RoomSelectionButtonProps) {
  function handleClick() {
    console.log(id);
  }

  return <button onClick={handleClick} className="room-selection-button">{label}</button>
}

/* RoomSelection component definition */
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
