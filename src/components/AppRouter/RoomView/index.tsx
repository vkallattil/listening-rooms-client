import React, { useEffect, useState } from "react";
import { getRoom } from "../../../api";
import Text from "../../_base/Text";
import Widget from "./Widget";
import * as styled from "./styled";
import { Container, Header, Body } from "../../_base/ViewTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { useRooms } from "../../RoomsProvider";

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
        <Text type="h1" margin="0px 0px 15px 0px">
          {room.label}
        </Text>
        <button
          onClick={() => {
            removeRoom(roomId).then(() => {
              navigate("/");
            });
          }}
        >
          Delete
        </button>
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
