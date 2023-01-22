import React from 'react';

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

export default RoomSelectionButton;