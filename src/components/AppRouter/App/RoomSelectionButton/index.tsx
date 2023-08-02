import React from "react";
import * as styled from "./styled";
import { useParams } from "react-router-dom";

interface RoomSelectionButtonProps {
  id: string;
  label: string;
}

function RoomSelectionButton({
  label,
  id,
}: RoomSelectionButtonProps) {
  const { roomId } = useParams<{ roomId: string }>();

  return (
    <styled.Link isActive={roomId === id} to={`/rooms/${id}`}>
      <styled.Label>{label}</styled.Label>
    </styled.Link>
  );
}

export default RoomSelectionButton;
