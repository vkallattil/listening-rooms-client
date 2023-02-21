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
  background: #fff1ed;
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
  color: #FFABAB;
`;

export const CreateRoomButton = styled.button`
  height: 36px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgb(255, 159, 159);
  background: linear-gradient(
    90deg,
    rgba(255, 159, 159, 1) 0%,
    rgba(255, 190, 190, 1) 87%
  );
  border: none;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 4px;
  color: #ffffff;
  border-radius: 6px;
`;

export const Panel = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;
