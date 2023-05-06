import styled, { keyframes } from "styled-components";

export const AudioPlayer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #ffabab;
  padding: 15px;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  margin-right: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 300px;
  overflow-x: hidden;
`;

export const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const move = keyframes`
  from { margin-left: -100px; }
  to { margin-left: 0px; }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  animation: ${move} 10s infinite;
`;

export const Artist = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
`;
