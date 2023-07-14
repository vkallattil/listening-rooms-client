import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)<{ isActive: boolean }>`
  text-decoration: none;
  border: none;
  border-bottom: 1px solid #e4e4e4;
  background-color: ${(props) => (props.isActive ? "#FFA08B" : "#ffffff")};
  padding: 0 15px;
  height: 45px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? "#ffffff" : "#747474")};
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#FFA08B" : "#f2f2f2")};
  }
  &:active {
    background-color: ${(props) => (props.isActive ? "#FFA08B" : "#e5e5e5")};
  }
`;

export const Label = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;