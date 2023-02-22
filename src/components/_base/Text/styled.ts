import styled from "styled-components";

export const Header1 = styled.div<{ margin?: string }>`
  font-size: 36px;
  font-weight: 700;
  margin: ${(props) => props.margin || undefined};
`;
