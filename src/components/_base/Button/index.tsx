import React from "react";
import * as styled from "./styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, onClick }: ButtonProps) {
  return <styled.Button onClick={onClick}>{children}</styled.Button>;
}

export default Button;
