import React, { useRef, useEffect, useContext, useState } from "react";
import { SocketContext, SocketContextValue } from "../../../SocketContext";
import * as styled from "./styled";
import { SoundObject, Widget } from "../../../../utils/types";
import {
  faPause,
  faPlay,
  faRandom,
  faBackward,
  faForward,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "../ProgressBar";

export interface WidgetProps {
  songUrl: string;
}

function Widget({ songUrl }: WidgetProps) {
  const widgetRef = useRef<HTMLIFrameElement>(null);

  const { widget, setWidget, setSendPlayback } = useContext(
    SocketContext
  ) as SocketContextValue;

  const [currentSound, setCurrentSound] = useState<SoundObject | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songPosition, setSongPosition] = useState<number>(0);

  const [onRepeat, setOnRepeat] = useState(false);
  const [onShuffle, setOnShuffle] = useState(false);

  // Initialize SC widget when iframe renders.
  useEffect(() => {
    if (widgetRef.current) {
      setWidget(SC.Widget(widgetRef.current));
    }
  }, [widgetRef]);

  // Bind widget events when widget is initialized.
  useEffect(() => {
    if (widget) {
      widget.bind(SC.Widget.Events.READY, () => {
        widget.load(songUrl, {
          callback: () => {
            widget.getCurrentSound((currentSound: SoundObject) => {
              console.log(currentSound);
              setCurrentSound(currentSound);
            });
          },
        });
        // TODO: Figure out how to get the widget to send play events without infinite loop.
        widget.bind(SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
          console.log("PLAY");
        });
        widget.bind(SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
          console.log("PAUSE");
        });
        widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e: any) => {
          setSongPosition(e.currentPosition);
        });
      });
    }

    return () => {
      if (widget) {
        // widget.unbind(SC.Widget.Events.READY);
        // widget.unbind(SC.Widget.Events.PLAY);
        // widget.unbind(SC.Widget.Events.PAUSE);
        // widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
      }
    };
  }, [widget, songUrl]);

  return (
    <>
      <styled.IFrame
        ref={widgetRef}
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
      />
      {currentSound && (
        <styled.WidgetContainer>
          <styled.WidgetBanner>
            <styled.DefaultAlbumCover />
            <styled.SongInformation>
              <styled.ArtistName>
                {currentSound.user.username}
              </styled.ArtistName>
              <styled.AlbumTitle>{currentSound.title}</styled.AlbumTitle>
            </styled.SongInformation>
          </styled.WidgetBanner>

          <ProgressBar
            duration={currentSound.duration}
            songPosition={songPosition}
          />

          <styled.PlaybackContainer>
            <styled.QueueChangeButton
              isActive={onShuffle}
              onClick={() => setOnShuffle(!onShuffle)}
            >
              <styled.Icon type="small" icon={faRandom} />
            </styled.QueueChangeButton>
            <styled.PlaybackButton>
              <styled.Icon type="medium" icon={faBackward} />
            </styled.PlaybackButton>

            {isPlaying ? (
              <styled.PlaybackButton
                onClick={() => {
                  widget.pause();
                  setSendPlayback("PAUSE");
                }}
              >
                <styled.Icon type="large" icon={faPause} />
              </styled.PlaybackButton>
            ) : (
              <styled.PlaybackButton
                onClick={() => {
                  widget.play();
                  setSendPlayback("PLAY");
                }}
              >
                <styled.Icon type="large" icon={faPlay} />
              </styled.PlaybackButton>
            )}

            <styled.PlaybackButton>
              <styled.Icon type="medium" icon={faForward} />
            </styled.PlaybackButton>
            <styled.QueueChangeButton
              isActive={onRepeat}
              onClick={() => setOnRepeat(!onRepeat)}
            >
              <styled.Icon type="small" icon={faRepeat} />
            </styled.QueueChangeButton>
          </styled.PlaybackContainer>
        </styled.WidgetContainer>
      )}
    </>
  );
}

export default Widget;
