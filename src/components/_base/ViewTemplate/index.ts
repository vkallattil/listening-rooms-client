import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Body = styled.div<{ flexDirection?: string; padding?: string }>`
  flex-grow: 1;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : undefined};
  background-color: #ffffff;
  border: 2px solid #e4e4e4;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
