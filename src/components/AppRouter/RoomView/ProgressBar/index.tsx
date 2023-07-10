import React from "react";
import * as styled from "./styled"

function ProgressBar() {
  return <styled.Input type="range" min="0" max="100" id="myRange" />;
}

export default ProgressBar