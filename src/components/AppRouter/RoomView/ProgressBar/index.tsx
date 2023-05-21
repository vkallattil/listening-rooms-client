import React, { useState, useRef, useEffect } from "react";
import * as styled from "./styled";

interface ProgressBarProps {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

function ProgressBar({ progress, setProgress }: ProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMouseDown(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (progressBarRef.current) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      let progress = (event.clientX - progressBarRect.left) / progressBarRect.width;
      if (progress < 0) {
        progress = 0;
      } else if (progress > 1) {
        progress = 1;
      }
      setProgress(progress * 100);
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
    }
  }, [isMouseDown])

  return (
    <styled.ProgressBar ref={progressBarRef}>
      <styled.Handle
        handlePosition={progress}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <styled.Progress progress={progress} />
    </styled.ProgressBar>
  );
}

export default ProgressBar;
