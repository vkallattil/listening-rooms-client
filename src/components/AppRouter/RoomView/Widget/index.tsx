import React, { useRef, useEffect, useState } from "react";
import { useSocket } from "../../../SocketProvider";
import * as styled from "./styled";
import { SoundObject, Widget } from "../../../../utils/types";
import {
  faPause,
  faPlay,
  faRandom,
  faBackward,
  faForward,
  faRepeat,
} from "../../../../utils/icons";
import ProgressBar from "../ProgressBar";

export interface WidgetProps {
  widgetUrl: string;
}

function Widget({ widgetUrl }: WidgetProps) {
  const widgetRef = useRef<HTMLIFrameElement>(null);

  const {
    sendPlayback,
    sendSeek,
    widget,
    setWidget,
    setSounds,
    currentSound,
    setCurrentSound,
    isPlaying,
    songPosition,
    setSongPosition
  } = useSocket();

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
        widget.load(widgetUrl, {
          callback: () => {
            widget.getCurrentSound((currentSound: SoundObject) => {
              setCurrentSound(currentSound);
            });
            widget.getSounds((sounds) => {
              setSounds(sounds);
            });
          },
        });
        widget.bind(SC.Widget.Events.PLAY, () => {});
        widget.bind(SC.Widget.Events.PAUSE, () => {});
        widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e: any) => {
          setSongPosition(e.currentPosition);
        });
      });
    }
  }, [widget, widgetUrl]);

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
            <styled.PlaybackButton
              onClick={() => {
                widget.prev();
                sendPlayback("PAUSE");
                widget.getCurrentSound((currentSound: SoundObject) => {
                  setCurrentSound(currentSound);
                });
              }}
            >
              <styled.Icon type="medium" icon={faBackward} />
            </styled.PlaybackButton>

            {isPlaying ? (
              <styled.PlaybackButton
                onClick={() => {
                  sendPlayback("PAUSE");
                  widget.getPosition((position: number) => {
                    sendSeek(position)
                  })              
                }}
              >
                <styled.Icon type="large" icon={faPause} />
              </styled.PlaybackButton>
            ) : (
              <styled.PlaybackButton
                onClick={() => {
                  sendPlayback("PLAY");
                  widget.getPosition((position: number) => {
                    sendSeek(position)
                  })              
                }}
              >
                <styled.Icon type="large" icon={faPlay} />
              </styled.PlaybackButton>
            )}

            <styled.PlaybackButton
              onClick={() => {
                widget.next();
                sendPlayback("PAUSE");
                widget.getCurrentSound((currentSound: SoundObject) => {
                  setCurrentSound(currentSound);
                });
              }}
            >
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
