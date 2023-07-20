import styled from "styled-components";

export const Input = styled.input<{ width?: string }>`
  height: 35px;
  min-width: 200px;
  width: ${props => props.width ? props.width : undefined};
  font-family: "Open Sans", sans-serif;
  color: #747474;
  border: 2px solid #E4E4E4;
  border-radius: 6px;
  padding-left: 10px;
  outline: none;
  margin-right: 15px;
  box-sizing: border-box;
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`