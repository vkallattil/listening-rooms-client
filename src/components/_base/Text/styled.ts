import styled from "styled-components";

export const Header1 = styled.div<{ margin?: string }>`
  display: flex;
  font-size: 36px;
  font-weight: 700;
  margin: ${(props) => props.margin || undefined};
`;

export const Header2 = styled.div<{ margin?: string }>`
  font-size: 28px;
  font-weight: 700;
  margin: ${(props) => props.margin || undefined};
`;

export const Paragraph = styled.div<{ margin?: string }>`
  font-size: 16px;
  font-weight: 400;
  margin: ${(props) => props.margin || undefined};
`;
