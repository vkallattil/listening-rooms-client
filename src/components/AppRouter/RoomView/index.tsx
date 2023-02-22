import { faLock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { getRoom } from "../../../api";
import { Room } from "../../../types";
import Text from "../../_base/Text";
import * as styled from "./styled";

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await getRoom(params.roomId);
  const room = response.data;
  return { room };
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
      <styled.Body />
    </styled.Container>
  );
}

export default RoomView;
