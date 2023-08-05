import React from "react";
import * as styled from "./styled";
import Text from "../../../_base/Text";
import { formatTime } from "../../../../utils/dates";
import { useSocket } from "../../../SocketProvider";

function SongQueue() {
  const { sendPlayback, sounds, currentSound, sendSkip } = useSocket();

  return (
    <styled.SongQueueContainer>
      <styled.SongQueueHeader>PLAYLIST</styled.SongQueueHeader>
      <styled.SongQueueList>
        {sounds.map((sound, index) => {
          if (!sound.title && !sound.user) {
            return (
              // TODO: Work around this or provide helpful message.
              <styled.ListItem notAvailable>
                <styled.ListItemArtist>
                  <em>Song Information Loading...</em>
                </styled.ListItemArtist>
                <Text type="p">-:--</Text>
              </styled.ListItem>
            );
          }
          return (
            <styled.ListItem
              onClick={() => {
                sendSkip(index);
                sendPlayback("PAUSE");
              }}
              isCurrent={currentSound.id === sound.id ? true : false}
            >
              <styled.ListItemSong>{sound.title}</styled.ListItemSong>
              <styled.ListItemArtist>
                {sound.user.username}
              </styled.ListItemArtist>
              <Text type="p">{formatTime(sound.duration)}</Text>
            </styled.ListItem>
          );
        })}
      </styled.SongQueueList>
    </styled.SongQueueContainer>
  );
}

export default SongQueue;
