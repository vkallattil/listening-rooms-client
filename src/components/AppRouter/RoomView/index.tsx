import React, { useEffect, useState } from "react";
import { IconButton } from "../../_base/Button";
import { getRoom } from "../../../api";
import Widget from "./Widget";
import * as styled from "./styled";
import { Container, Header, Body } from "../../_base/ViewTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { useRooms } from "../../RoomsProvider";
import Text from "../../_base/Text";
import { faEdit, faMessage, faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <styled.Header1>{room.label}</styled.Header1>
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
        <styled.TemporaryPanel>
          <styled.MessagesIcon icon={faMessage} />
          <styled.Paragraph>
            <em>User messaging features under development</em>
          </styled.Paragraph>
        </styled.TemporaryPanel>
      </Body>
    </Container>
  );
}

export default RoomView;
