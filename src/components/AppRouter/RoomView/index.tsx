import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getRoom } from "../../../api";
import { Room } from "../../../utils/types";
import Text from "../../_base/Text";
import Widget from "./Widget";
import * as styled from "./styled";

export async function loader({ params }: LoaderFunctionArgs) {
  // const response = await getRoom(params.roomId);
  // const room = response.data;
  // return { room };
  await setTimeout(() => {}, 1000);
  return {
    room: {
      id: "1",
      label: "Room 1",
      isPrivate: false,
      songUrl: "https://soundcloud.com/tooley-82425864/houdini-travis-scott"
    }
  }

}

function RoomView() {
  const { room } = useLoaderData() as { room: Room };

  return (
    <styled.Container>
      <styled.Header>
        <Text type="h1" margin="0px 0px 15px 0px">
          {room.label}
        </Text>
        {room.isPrivate && <styled.LockIcon icon={faLock} />}
      </styled.Header>
      <styled.Body>
        <styled.PanelOne>
        <Widget songUrl={room.songUrl} />
        </styled.PanelOne>
        {/* <styled.PanelTwo /> */}
      </styled.Body>
    </styled.Container>
  );
}

export default RoomView;
