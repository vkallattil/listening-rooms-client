import React, { useEffect, useRef, useState, useContext } from "react";
import { SocketContext, SocketContextValue } from "../../../SocketContext";
import * as styled from "./styled";

interface ProgressBarProps {
  duration: number;
  songPosition: number;
}

function ProgressBar({ duration, songPosition }: ProgressBarProps) {
  const { widget } = useContext(SocketContext) as SocketContextValue;

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
    <styled.Input
      ref={inputRef}
      type="range"
      min="0"
      max={`${duration}`}
      id="myRange"
    />
  );
}

export default ProgressBar;
