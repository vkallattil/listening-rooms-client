import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { getRoom } from "../../mockApi";
import { Room } from "../../types";

export function loader({ params }: LoaderFunctionArgs) {
  const room = getRoom(params.roomId);
  return { room };
}

function RoomView() {
  const { room } = useLoaderData() as { room: Room };
  return <div>{room.label}</div>;
}

export default RoomView;
