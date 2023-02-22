import React, { useRef, useEffect } from "react";
import "./scripts/soundcloud-widget.js";



function Widget() {
  var widgetRef = useRef<HTMLIFrameElement>(null);

  // Github copilot wrote this entire useEffect call for me!
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.onload = () => {
        const widget = SC.Widget(widgetRef.current);
        widget.bind(SC.Widget.Events.READY, () => {
          widget.bind(SC.Widget.Events.PLAY, () => {
            console.log("play");
          });
          widget.bind(SC.Widget.Events.PAUSE, () => {
            console.log("pause");
          });
        });
      };
    }
  }, []);

  return (
    <iframe
      width="100%"
      ref={widgetRef}
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
    />
  );
}

export default Widget;
