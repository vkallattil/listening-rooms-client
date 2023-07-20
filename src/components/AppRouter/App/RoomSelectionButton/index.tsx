import React from "react";
import { useSocket } from "../../../SocketProvider";
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
  const { changeRoom } = useSocket();
  const { roomId } = useParams<{ roomId: string }>();

  const handleClick = () => {
    changeRoom(id);
  };

  return (
    <styled.Link isActive={roomId === id} to={`/rooms/${id}`} onClick={handleClick}>
      <styled.Label>{label}</styled.Label>
    </styled.Link>
  );
}

export default RoomSelectionButton;
