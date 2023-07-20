import React, { useEffect, useRef, useState, useContext } from "react";
import { useWidget } from "../../../WidgetProvider";
import * as styled from "./styled";

interface ProgressBarProps {
  duration: number;
  songPosition: number;
}

function ProgressBar({ duration, songPosition }: ProgressBarProps) {
  const { widget } = useWidget();

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

  function formatTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}`;
  }  

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
