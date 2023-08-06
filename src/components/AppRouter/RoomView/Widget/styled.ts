import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IFrame = styled.iframe`
  position: absolute;
  visibility: hidden;
  opacity: 0;
`;

export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffa08b;
  padding: 25px 25px 15px 25px;
  border-radius: 16px;
  color: #ffffff;
  align-self: flex-start;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 25px;
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
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  flex-grow: 1;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px; /* Set the height of the fade-out gradient */
    background-image: linear-gradient(
      to bottom,
      rgba(255, 160, 139, 0),
      rgba(255, 160, 139, 1)
    );
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 13px; /* Set the height of the fade-out gradient */
    background-image: linear-gradient(
      to bottom,
      rgba(255, 160, 139, 1),
      rgba(255, 160, 139, 0)
    );
  }
`;

export const ArtistName = styled.span`
  font-weight: 600;
  width: fit-content;
  text-transform: uppercase;
  border-radius: 2px;
  margin-top: 15px;
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

export const QueueChangeButton = styled(PlaybackButton)<{ isActive: boolean }>`
  & > svg {
    color: ${props => props.isActive ? "#ffffff" : "#000000"};
    opacity: ${props => props.isActive ? 1 : 0.15};

    &:hover {
      color: ${props => props.isActive ? "#ffffff" : "#000000"};
      opacity: ${props => props.isActive ? 1 : 0.35};
    }
  }
`;
