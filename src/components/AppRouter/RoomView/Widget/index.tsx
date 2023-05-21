import React, { useRef, useEffect, useContext, useState } from "react";
import { SocketContext, SocketContextValue } from "../../../SocketContext";
import * as styled from "./styled";
import { SoundObject, Widget } from "../../../../utils/types";
import ProgressBar from "../ProgressBar";
import { faUsers, faLock } from "@fortawesome/free-solid-svg-icons";

export interface WidgetProps {
  songUrl: string;
}

function Widget({ songUrl }: WidgetProps) {
  const widgetRef = useRef<HTMLIFrameElement>(null);

  const { widget, setWidget, setSendPlayback } = useContext(
    SocketContext
  ) as SocketContextValue;

  const [currentSound, setCurrentSound] = useState<SoundObject | null>(null);
  const [progress, setProgress] = useState(0);

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
        // widget.bind(SC.Widget.Events.PLAY, () => {});
        // widget.bind(SC.Widget.Events.PAUSE, () => {});
      });
    }

    return () => {
      if (widget) {
        widget.unbind(SC.Widget.Events.READY);
        // widget.unbind(SC.Widget.Events.PLAY);
        // widget.unbind(SC.Widget.Events.PAUSE);
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
          <ProgressBar progress={progress} setProgress={setProgress} />
          <button
            onClick={() => {
              widget.play();
              setSendPlayback("PLAY");
            }}
          >
            Play
          </button>
          <button
            onClick={() => {
              widget.pause();
              setSendPlayback("PAUSE");
            }}
          >
            Pause
          </button>
        </styled.WidgetContainer>
      )}
    </>
  );
}

export default Widget;
