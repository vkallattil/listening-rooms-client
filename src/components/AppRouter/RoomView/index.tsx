import React, { useEffect, useState } from "react";
import { IconButton } from "../../_base/Button";
import { getRoom } from "../../../api";
import * as styled from "./styled";
import { Container, Header, Body } from "../../_base/ViewTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { useRooms } from "../../RoomsProvider";
import { faEdit, faTrash } from "../../../utils/icons";
import Widget from "./Widget";
import Chat from "./Chat";
import SongQueue from "./SongQueue";
import { useWidget } from "../../WidgetProvider";
import { useSocket } from "../../SocketProvider";

function RoomView() {
  const { roomId } = useParams();
  const { removeRoom } = useRooms();
  const { changeRoom } = useSocket();
  const navigate = useNavigate();
  const { sounds } = useWidget();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changeRoom(roomId);
  }, [roomId])

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
          color="rgba(255, 116, 116, 1)"
          onClick={() => {
            removeRoom(roomId).then(() => {
              navigate("/");
            });
          }}
        />
      </Header>
      <Body>
        <styled.PanelOne>
          <Widget widgetUrl={room.widgetUrl} />
          {sounds.length > 1 && <SongQueue />}
        </styled.PanelOne>
        {/* <styled.TemporaryPanel>
          <styled.MessagesIcon icon={faMessage} />
          <styled.Paragraph>
            <em>User messaging features under development</em>
          </styled.Paragraph>
        </styled.TemporaryPanel> */}
        <styled.PanelTwo>
          <Chat />
        </styled.PanelTwo>
      </Body>
    </Container>
  );
}

export default RoomView;
