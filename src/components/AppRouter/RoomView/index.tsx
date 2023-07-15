import React, { useEffect, useState } from "react";
import { IconButton } from "../../_base/Button";
import { getRoom } from "../../../api";
import Widget from "./Widget";
import * as styled from "./styled";
import { Container, Header, Body } from "../../_base/ViewTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { useRooms } from "../../RoomsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function RoomView() {
  const { roomId } = useParams();
  const { removeRoom } = useRooms();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }

    getRoom(roomId).then((response) => {
      setRoom(response.data);
      setLoading(false);
    });
  }, [roomId]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Header>
        <styled.Text>{room.label}</styled.Text>
        <IconButton
          icon={faEdit}
          onClick={() => {
            navigate(`/edit-room/${roomId}`);
          }}
        />
        <IconButton
          icon={faTrash}
          color="#d95555"
          onClick={() => {
            removeRoom(roomId).then(() => {
              navigate("/");
            });
          }}
        />
      </Header>
      <Body>
        <styled.PanelOne>
          <Widget songUrl={room.songUrl} />
        </styled.PanelOne>
        <styled.PanelTwo />
      </Body>
    </Container>
  );
}

export default RoomView;
