import React from "react";
import * as styled from "./styled";
import Text from "../../../_base/Text";
import { formatTime } from "../../../../utils/dates";
import { useWidget } from "../../../WidgetProvider";

function SongQueue() {
  const { widget, sounds, currentSound, setCurrentSound } = useWidget();

  return (
    <styled.SongQueueContainer>
      <styled.SongQueueHeader>PLAYLIST</styled.SongQueueHeader>
      <styled.SongQueueList>
        {sounds.map((sound, index) => {
          if (sound.monetization_model === "AD_SUPPORTED") {
            return (
              // TODO: Work around this or provide helpful message.
              <styled.ListItem notAvailable>
                <styled.ListItemArtist>
                  <em>Song Information Not Available</em>
                </styled.ListItemArtist>
                <Text type="p">-:--</Text>
              </styled.ListItem>
            );
          }
          return (
            <styled.ListItem
              onClick={() => {
                widget.skip(index);
                setCurrentSound(sound);
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
