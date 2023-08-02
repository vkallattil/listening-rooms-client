import styled from "styled-components";

export const SongQueueContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;

export const SongQueueHeader = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SongQueueList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  background: #f9f9f9;
  border-radius: 4px;
  border: 2px solid #e5e5e5;
`;

export const ListItem = styled.div<{ last?: boolean; isCurrent?: boolean; notAvailable?: boolean }>`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border-bottom: ${(props) => (props.last ? "none" : "1px solid #e5e5e5")};
  color: ${props => props.isCurrent ? "#ffa08b" : "#747474"};
  opacity: ${props => props.notAvailable ? 0.5 : 1};
  cursor: ${props => props.notAvailable ? undefined : "pointer"};
`;

export const ListItemSong = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-right: 10px;
`;

export const ListItemArtist = styled.div`
  font-size: 14px;
  flex-grow: 1;
  margin-right: 10px;
`;
