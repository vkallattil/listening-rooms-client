import React, { useState } from "react";
import * as styled from "./styled";
import Text from "../../_base/Text";
import Input from "../../_base/Input";
import Button from "../../_base/Button";
import { Container, Body, Header } from "../../_base/ViewTemplate";
import { useRooms } from "../../RoomsProvider";
import { useNavigate, useParams } from "react-router-dom";
import { SecondaryButton } from "../../_base/Button";

function CreateRoom() {
  const { createRoom } = useRooms();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [songUrl, setSongUrl] = useState("");

  return (
    <Container>
      <Header>
        <Text type="h1" margin="0px 0px 15px 0px">
          Create a room
        </Text>
      </Header>
      <Body flexDirection="column">
        <styled.Form>
          <Input
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            label="Song URL"
            width="400px"
            value={songUrl}
            onChange={(event) => setSongUrl(event.target.value)}
          />
        </styled.Form>
        <styled.ButtonContainer>
          <Button
            onClick={() => {
              createRoom({
                label: name,
                songUrl: songUrl,
              }).then((room: any) => {
                navigate(`/rooms/${room.id}`);
              });
            }}
            margin="0px 15px 0px 0px"
          >
            CREATE
          </Button>
          <SecondaryButton onClick={() => {
            navigate(-1)
          }}>
            CANCEL
          </SecondaryButton>
        </styled.ButtonContainer>
      </Body>
    </Container>
  );
}

export default CreateRoom;
