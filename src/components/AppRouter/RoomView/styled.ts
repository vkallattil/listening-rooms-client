import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const LockIcon = styled(FontAwesomeIcon)`
  margin-left: 15px;
  height: 32px;
  width: 32px;
  margin-bottom: 15px;
`;

export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  background-color: #ffffff;
  border: 2px solid #e4e4e4;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const PanelOne = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-right: 2px solid #e4e4e4;
  padding: 15px;
`;

export const PanelTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
`;
