import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
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

export const CreateButton = styled.button<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  margin?: string;
}>`
  height: 36px;
  padding-left: 10px;
  padding-right: 10px;
  margin: ${(props) => (props.margin ? props.margin : undefined)};
  background: rgb(255, 159, 159);
  background: linear-gradient(
    90deg,
    rgba(255, 160, 139, 1) 0%,
    rgba(255, 190, 176, 1) 87%
  );
  border: none;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 4px;
  color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(255, 190, 176, 1);
    transition: 0.3s;
  }
  &:focus:active {
    box-shadow: 0px 0px 12px 2px rgba(255, 190, 176, 1);
  }
`;
