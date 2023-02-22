// TODO: Major work in progress
import React from "react";
import { SoundObject } from "../Widget/types";
import * as styled from "./styled";

interface AudioPlayerProps {
  currentSound: SoundObject;
}

function AudioPlayer({ currentSound }: AudioPlayerProps) {
  return (
    <styled.AudioPlayer>
      <styled.Header>
        <styled.Image src={currentSound.artwork_url} />
        <styled.SongInformation>
          <styled.Title>{currentSound.title}</styled.Title>
          <styled.Artist>{currentSound.user.username}</styled.Artist>
        </styled.SongInformation>
      </styled.Header>
    </styled.AudioPlayer>
  );
}

export default AudioPlayer;
