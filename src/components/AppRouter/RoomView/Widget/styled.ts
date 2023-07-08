import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IFrame = styled.iframe`
  position: absolute;
  visibility: hidden;
`;

export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffa08b;
  padding: 25px 45px 15px 25px;
  border-radius: 16px;
  color: #ffffff;
  align-self: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const WidgetBanner = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 125px;
  margin-bottom: 25px;
  overflow: hidden;
`;

export const PlaybackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DefaultAlbumCover = styled.div`
  min-width: 125px;
  min-height: 125px;
  background: #ffffff;
  border-radius: 16px;
  margin-right: 25px;
`;

export const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: ellipsis;
`;

export const AlbumTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  flex-grow: 1;
  text-overflow: ellipsis;
`;

export const ArtistName = styled.span`
  font-size: 16px;
  font-weight: 700;
  width: fit-content;
  padding: 2px 5px;
  text-transform: uppercase;
  background: white;
  color: #ffa08b;
  border-radius: 2px;
`;

export const Icon = styled(FontAwesomeIcon)<{ type: string }>`
  font-size: ${({ type }) => {
    switch (type) {
      case "small":
        return "32px";
      case "medium":
        return "42px";
      case "large":
        return "48px";
      default:
        return "32px";
    }
  }};
  margin-right: 10px;
  color: #ffffff;
`;

export const PlaybackButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    margin: 0;
  }
`;
