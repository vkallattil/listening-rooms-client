import React from "react";
import Text from "../../_base/Text";
import Widget from "./Widget";
import * as styled from "./styled";

function RoomView() {
  return (
    <styled.Container>
      <styled.Header>
        <Text type="h1" margin="0px 0px 15px 0px">
          Room 1
        </Text>
      </styled.Header>
      <styled.Body>
        <styled.PanelOne>
          <Widget songUrl="https://soundcloud.com/beaubouthillier-1/mos-def-auditorium-2" />
        </styled.PanelOne>
        {/* <styled.PanelTwo /> */}
      </styled.Body>
    </styled.Container>
  );
}

export default RoomView;
