import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { getRoom } from "../../api";
import { Room } from "../../types";

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await getRoom(params.roomId);
  const room = response.data;
  return { room };
}

function RoomView() {
  const { room } = useLoaderData() as { room: Room };
  return <div>{room.label}</div>;
}

export default RoomView;
