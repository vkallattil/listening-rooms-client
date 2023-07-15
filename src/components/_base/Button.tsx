import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export const Button = styled.button<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  margin?: string;
}>`
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  margin: ${(props) => (props.margin ? props.margin : undefined)};
  background: #747474;
  border: none;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  border-radius: 6px;
  transition: 0.2s;
`;

export const SecondaryButton = styled(Button)<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  margin?: string;
}>`
  background: #ffffff;
  border: 2px solid #747474;
  color: #747474;
`;

export const StyledIconButton = styled.button<{ color: string }>`
  background-color: #ffffff;
  color: ${(props) => (props.color ? props.color : "#747474")};
  border: none;
  border-radius: 5px;
  margin: 0px 0px 15px 0px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 24px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f2f2f2;
  }
  &:active {
    background-color: #e5e5e5;
  }
`;

export function IconButton({
  icon,
  onClick,
  color,
}: {
  icon: IconProp;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}) {
  return (
    <StyledIconButton onClick={onClick} color={color}>
      <FontAwesomeIcon icon={icon} />
    </StyledIconButton>
  );
}

export default Button;
