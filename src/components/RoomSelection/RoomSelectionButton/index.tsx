import React from "react";
import { Link } from "react-router-dom";
import style from "./index.css";

interface RoomSelectionButtonProps {
  id: string;
  label?: string;
}

function RoomSelectionButton({ label, id }: RoomSelectionButtonProps) {
  return (
    <Link to={`/rooms/${id}`}>
      <button className={style.roomSelectionButton}>{label}</button>
    </Link>
  );
}

export default RoomSelectionButton;
