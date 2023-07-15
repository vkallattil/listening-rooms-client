import styled from "styled-components";
import { Header1 } from "../../_base/Text/styled";

export const PanelOne = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-right: 2px solid #e4e4e4;
  padding: 25px;
`;

export const PanelTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
`;

export const Text = styled(Header1)`
  flex-grow: 1;
  margin: 0px 0px 15px 0px
`

export const SettingsButton = styled.button`
  background-color: #ffffff;
  color: #747474;
  border: none;
  border-radius: 5px;
  margin: 0px 0px 15px 0px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 24px;
`