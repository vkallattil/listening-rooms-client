import React, { useRef, useEffect, useState } from "react";
import { Room } from "../../../../../types";
import { Widget, SoundObject } from "./types";
import * as styled from "./styled";
import "./scripts/soundcloud-widget.js";

export interface WidgetProps {
  room: Room;
}

function Widget({ room }: WidgetProps) {
  const widgetRef = useRef<HTMLIFrameElement>(null);
  const [widget, setWidget] = useState<Widget>();
  const [currentSound, setCurrentSound] = useState<SoundObject>();
  const [loading, setLoading] = useState<boolean>(true);

  // Called on iframe onload and component mount to set widget
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.onload = () => {
        setWidget(SC.Widget(widgetRef.current));
      };
    }
  }, []);

  // Called when widget is set to bind events and load song
  useEffect(() => {
    if (widget) {
      console.log("restarting");
      setLoading(true);
      widget.unbind(SC.Widget.Events.PLAY);
      widget.unbind(SC.Widget.Events.PAUSE);

      // Load new song
      widget.load(room.songUrl, {
        callback: () => {
          console.log("song loaded");
          widget.getCurrentSound((currentSound: SoundObject) => {
            setCurrentSound(currentSound);
          });
        },
      });

      // Bind new events
      widget.bind(SC.Widget.Events.READY, () => {
        console.log("ready");
        widget.bind(SC.Widget.Events.PLAY, () => {
          console.log("play");
        });
        widget.bind(SC.Widget.Events.PAUSE, () => {
          console.log("pause");
        });
      });
    }
  }, [widget, room.songUrl]);

  // Called when song is loaded and currentSound is returned.
  useEffect(() => {
    setLoading(false);
    console.log(currentSound);
  }, [currentSound]);

  return (
    <styled.WidgetContainer loading={loading}>
      {loading && <div>Loading...</div>}
      <iframe
        width="100%"
        ref={widgetRef}
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
      />
    </styled.WidgetContainer>
  );
}

export default Widget;
