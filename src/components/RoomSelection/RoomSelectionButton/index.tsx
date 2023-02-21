import React from "react";
import { Link } from "react-router-dom";
import * as styled from "./styled";

interface RoomSelectionButtonProps {
  id: string;
  label?: string;
  first?: boolean;
  last?: boolean;
}

function RoomSelectionButton({ label, id }: RoomSelectionButtonProps) {
  return (
    <Link to={`/rooms/${id}`}>
      <styled.RoomSelectionButton>{label}</styled.RoomSelectionButton>
    </Link>
  );
}

export default RoomSelectionButton;
