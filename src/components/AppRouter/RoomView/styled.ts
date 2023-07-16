import styled from "styled-components";
import {
  Header1 as ImportHeader1,
  Paragraph as ImportParagraph,
} from "../../_base/Text/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PanelOne = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-right: none;
  padding: 25px;
  @media only screen and (min-width: 1200px) {
    border-right: 2px solid #e4e4e4;
  }
`;

export const PanelTwo = styled.div`
  display: none;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
  padding: 15px;
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const TemporaryPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
  justify-content: center;
  align-items: center;
`;

export const MessagesIcon = styled(FontAwesomeIcon)`
  font-size: 72px;
  color: #ffebe7;
  margin: 0px 0px 15px 0px;
`;

export const Header1 = styled(ImportHeader1)`
  flex-grow: 1;
  margin: 0px 0px 15px 0px;
`;

export const SettingsButton = styled.button`
  background-color: #ffffff;
  color: #747474;
  border: none;
  border-radius: 5px;
  margin: 0px 0px 15px 0px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 24px;
`;

export const Paragraph = styled(ImportParagraph)`
  text-align: center;
  color: #a4a4a4;
`;
