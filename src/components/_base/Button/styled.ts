import styled from "styled-components";

export const Button = styled.button<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}>`
  height: 36px;
  padding-left: 10px;
  padding-right: 10px;
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
