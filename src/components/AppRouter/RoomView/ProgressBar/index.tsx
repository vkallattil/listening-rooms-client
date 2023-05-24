import React, { useState, useRef, useEffect } from "react";
import * as styled from "./styled";
import Text from "../../../_base/Text";

interface ProgressBarProps {
  currentPosition: number;
  seek: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
}

function ProgressBar({ currentPosition, seek, duration }: ProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMouseDown(true);
  };

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (progressBarRef.current) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      let progress =
        (event.clientX - progressBarRect.left) / progressBarRect.width;
      if (progress < 0) {
        progress = 0;
      } else if (progress > 1) {
        progress = 1;
      }
      seek(progress * duration);
    }
  };

  const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    if (isMouseDown) {
      addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseDown]);

  return (
    <styled.Container>
      <Text type="p" margin="0px 20px 0px 0px">{formatTime(currentPosition)}</Text>
      <styled.ProgressBar ref={progressBarRef}>
        <styled.Handle
          handlePosition={(currentPosition / duration) * 100}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        <styled.Progress progress={(currentPosition / duration) * 100} />
      </styled.ProgressBar>
      <Text type="p" margin="0px 0px 0px 20px">{formatTime(duration)}</Text>
    </styled.Container>
  );
}

export default ProgressBar;
