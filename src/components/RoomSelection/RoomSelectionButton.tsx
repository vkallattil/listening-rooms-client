import React from "react";
import { Link } from "react-router-dom";

interface RoomSelectionButtonProps {
  id: string;
  label?: string;
}

function RoomSelectionButton({ label, id }: RoomSelectionButtonProps) {
  function handleClick() {
    console.log(id);
  }

  return (
    <Link to={`/room/${id}`}>
      <button onClick={handleClick} className="room-selection-button">
        {label}
      </button>
    </Link>
  );
}

export default RoomSelectionButton;
