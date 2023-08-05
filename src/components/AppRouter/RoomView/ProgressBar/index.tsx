import React, { useEffect, useRef, useState, useContext } from "react";
import { useSocket } from "../../../SocketProvider";
import * as styled from "./styled";
import { formatTime } from "../../../../utils/dates";

interface ProgressBarProps {
  duration: number;
  songPosition: number;
}

function ProgressBar({ duration, songPosition }: ProgressBarProps) {
  const { widget } = useSocket();

  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    inputRef.current.addEventListener("change", function () {
      widget.seekTo(inputRef.current.value);
      setIsDragging(false);
    });

    inputRef.current.addEventListener("input", function () {
      setIsDragging(true);
    });
  }, []);

  useEffect(() => {
    if (!isDragging) {
      inputRef.current.value = songPosition;
    }
  });

  return (
    <styled.ProgressBarWrapper>
      <styled.TimeMarker>{formatTime(songPosition)}</styled.TimeMarker>
      <styled.Input
        ref={inputRef}
        type="range"
        min="0"
        max={`${duration}`}
        id="myRange"
      />
      <styled.TimeMarker>{formatTime(duration)}</styled.TimeMarker>
    </styled.ProgressBarWrapper>
  );
}

export default ProgressBar;
