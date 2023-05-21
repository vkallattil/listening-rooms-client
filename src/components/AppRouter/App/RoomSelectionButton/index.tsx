import React, { useContext } from "react";
import { SocketContext, SocketContextValue } from "../../../SocketContext";
import * as styled from "./styled";
import { faUsers, faLock } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

interface RoomSelectionButtonProps {
  id: string;
  label: string;
  userCount: number;
  isPrivate: boolean;
}

function RoomSelectionButton({
  label,
  id,
  isPrivate,
  userCount
}: RoomSelectionButtonProps) {
  const { changeRoom } = useContext(SocketContext) as SocketContextValue;
  const { roomId } = useParams<{ roomId: string }>();

  const handleClick = () => {
    changeRoom(id);
  };

  return (
    <styled.Link isActive={roomId === id} to={`/rooms/${id}`} onClick={handleClick}>
      <styled.Label>{label}</styled.Label>
      <styled.LockIcon isPrivate={isPrivate} icon={faLock} />
      <styled.Icon icon={faUsers} />
      <styled.UserCount>{userCount}</styled.UserCount>
    </styled.Link>
  );
}

export default RoomSelectionButton;
