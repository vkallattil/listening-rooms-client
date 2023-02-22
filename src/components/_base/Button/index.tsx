import React from "react";
import * as styled from "./styled";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <styled.Button>{children}</styled.Button>;
}

export default Button;
