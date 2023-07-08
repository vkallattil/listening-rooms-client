import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 30px;
  padding-right: 0;
  background: #ffffff;
  box-sizing: border-box;
`;

export const RoomsHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RoomsTitle = styled.div`
  flex-grow: 1;
  font-size: 36px;
  font-weight: 800;
  color: #FFA08B;
  margin-right: 15px;
`;

export const Panel = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
