import styled from "styled-components";

export const WidgetContainer = styled.div<{ loading: boolean }>`
  display: flex;
  flex-direction: column;
  & > iframe {
    display: ${({ loading }) => (loading ? "none" : "block")};
  }
`