import React from "react";
import * as styled from "./styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  margin?: string;
}

function Button({ children, onClick, margin }: ButtonProps) {
  return (
    <styled.Button onClick={onClick} margin={margin}>
      {children}
    </styled.Button>
  );
}

export function SecondaryButton({ children, onClick, margin }: ButtonProps) {
  return (
    <styled.SecondaryButton onClick={onClick} margin={margin}>
      {children}
    </styled.SecondaryButton>
  );
}

export default Button;
