import React, { useRef, useEffect, useState } from "react";
import {
  Widget,
  SoundObject,
} from "./types";
import * as styled from "./styled";
import "./soundcloud-widget.js";

export interface WidgetProps {
  songUrl: string;
}

function Widget({ songUrl }: WidgetProps) {
  const widgetRef = useRef<HTMLIFrameElement>(null);
  
  return (
    <styled.WidgetContainer>
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
