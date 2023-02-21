import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const SearchIconContainer = styled.div<{ focus: boolean }>`
  display: flex;
  align-items: center;
  padding-left: 13px;
  width: 30px;
  height: 45px;
  background-color: #ffffff;
  border: 2px solid ${(props) => (props.focus ? "#FFABAB" : "#E4E4E4")};
  transition: 0.2s;
  border-radius: 6px 0px 0px 6px;
  box-sizing: border-box;
  border-right: none;
`;

export const SearchIcon = styled(FontAwesomeIcon)<{ focus: boolean }>`
  width: 14px;
  height: 14px;
  color: ${(props) => (props.focus ? "#FFABAB" : "#747474")};
  transition: 0.2s;
`;

export const SearchBar = styled.input<{ focus: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 45px;
  font-family: "Open Sans", sans-serif;
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid ${(props) => (props.focus ? "#FFABAB" : "#E4E4E4")};
  border-left: none;
  border-radius: 0px 6px 6px 0px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.focus ? "#FFABAB" : "#747474")};
  transition: 0.2s;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::selection {
    background: #FFABAB;
    color: #FFFFFF;
  }
  &::placeholder {
    color: ${(props) => (props.focus ? "#FFABAB" : "#747474")};
    transition: 0.2s;
  }
`;
