import React, { useState, useEffect } from "react";
import * as styled from "./styled";
import Text from "../../_base/Text";
import Input from "../../_base/Input";
import Button from "../../_base/Button";
import { Container, Body, Header } from "../../_base/ViewTemplate";
import { useRooms } from "../../RoomsProvider";
import { useMatch, useNavigate } from "react-router-dom";
import { SecondaryButton } from "../../_base/Button";
import { Room } from "../../../utils/types";
import { getRoom } from "../../../api";

function CreateEditRoom() {
  const { createRoom, updateRoom } = useRooms();
  const navigate = useNavigate();
  const match = useMatch("/edit-room/:roomId");

  const [name, setName] = useState("");
  const [songUrl, setSongUrl] = useState("");

  const handleCreateRoom = () => {
    createRoom({
      label: name,
      songUrl: songUrl,
    }).then((room: Room) => {
      navigate(`/rooms/${room.id}`);
    });
  };

  const handleEditRoom = () => {
    console.log(match.params.roomId);
    updateRoom({
      id: match.params.roomId,
      label: name,
      songUrl: songUrl,
    }).then(() => {
      navigate(`/rooms/${match.params.roomId}`);
    });
  };

  useEffect(() => {
    console.log(match);
    if (match) {
      getRoom(match.params.roomId).then((response) => {
        setName(response.data.label);
        setSongUrl(response.data.songUrl);
      });
    } else {
      setName("");
      setSongUrl("");
    }
  }, [match]);

  return (
    <Container>
      <Header>
        <Text type="h1" margin="0px 0px 15px 0px">
          {match ? "Edit Room" : "Create Room"}
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
            onClick={match ? handleEditRoom : handleCreateRoom}
            margin="0px 15px 0px 0px"
          >
            {match ? "Save" : "Create"}
          </Button>
          <SecondaryButton
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </SecondaryButton>
        </styled.ButtonContainer>
      </Body>
    </Container>
  );
}

export default CreateEditRoom;
