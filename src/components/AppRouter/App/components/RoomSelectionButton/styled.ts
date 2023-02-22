import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = styled(NavLink)<{ isActive: boolean }>`
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #e4e4e4;
  background-color: ${(props) => (props.isActive ? "#FFC2C2" : "#ffffff")};
  padding: 0 15px;
  height: 45px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? "#ffffff" : "#747474")};
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#FFC2C2" : "#f2f2f2")};
  }
  &:active {
    background-color: ${(props) => (props.isActive ? "#FFC2C2" : "#e5e5e5")};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export const LockIcon = styled(FontAwesomeIcon)<{ isPrivate?: boolean }>`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  visibility: ${(props) => (props.isPrivate ? "visible" : "hidden")};
`;

export const Label = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const UserCount = styled.div``;
