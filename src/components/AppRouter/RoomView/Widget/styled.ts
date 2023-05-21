import styled from "styled-components";

export const IFrame = styled.iframe`
  position: absolute;
  visibility: hidden;
`;

export const WidgetContainer = styled.div`
  height: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  background: #ffabab;
  padding: 25px;
  border-radius: 16px;
  color: #ffffff;
`;

export const WidgetBanner = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 150px;
  margin-bottom: 25px;
  overflow: hidden;
`

export const DefaultAlbumCover = styled.div`
  min-width: 150px;
  min-height: 150px;
  background: #ffffff;
  border-radius: 16px;
  margin-right: 25px;
`

export const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const AlbumTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  flex-grow: 1;
  text-overflow: ellipsis;
`

export const ArtistName = styled.span`
  font-size: 16px;
  font-weight: 700;
  width: fit-content;
  padding: 2px 5px;
  text-transform: uppercase;
  background: white;
  color: #ffabab;
  border-radius: 2px;
`