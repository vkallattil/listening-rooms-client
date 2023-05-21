import React from "react";
import * as styled from "./styled";

interface TextProps {
  type: string;
  children: React.ReactNode;
  margin?: string;
}

function Text({ type, children, margin }: TextProps) {
  switch (type) {
    case "h1":
      return <styled.Header1 margin={margin}>{children}</styled.Header1>;
    case "h2":
      return <styled.Header2 margin={margin}>{children}</styled.Header2>;
    case "p":
      return <styled.Paragraph margin={margin}>{children}</styled.Paragraph>;
  }
}

export default Text;