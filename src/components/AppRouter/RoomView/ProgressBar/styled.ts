import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #ffebe7;
  position: relative;
`;

export const Progress = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  border-radius: 3px;
  background: #ffffff;
`;

export const Handle = styled.div<{ handlePosition: number }>`
  position: absolute;
  transform: translate(-45%, -40%);
  left: ${({ handlePosition }) => handlePosition}%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffabab;
  border: 8px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  transition: 0.15s;
  cursor: grab;
  &:hover {
    border-width: 6px;
  }
  &:active {
    cursor: grabbing;
  }
`;