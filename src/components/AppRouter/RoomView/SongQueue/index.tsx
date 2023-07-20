import React from "react";
import * as styled from "./styled";
import Text from "../../../_base/Text";

interface SongQueueProps {
  
}

function SongQueue({}: SongQueueProps) {
  return (
    <styled.SongQueueContainer>
      <styled.SongQueueHeader>PLAYLIST</styled.SongQueueHeader>
      <styled.SongQueueList>
        <styled.ListItem>
          <styled.ListItemSong>Puff Daddy</styled.ListItemSong>
          <styled.ListItemArtist>JPEGMAFIA</styled.ListItemArtist>
          <Text type="p">3:09</Text>
        </styled.ListItem>
      </styled.SongQueueList>
    </styled.SongQueueContainer>
  );
}

export default SongQueue;
