import React from "react";
import * as styled from "./styled";

interface InputProps {
  label?: string;
  width?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

function Input({ label, width, onChange, value }: InputProps) {
  return (
    <styled.Container>
      <styled.Label>{label}</styled.Label>
      <styled.Input width={width} onChange={onChange} value={value} />
    </styled.Container>
  );
}

export default Input;
