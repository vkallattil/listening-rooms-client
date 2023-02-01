import React from "react";
import { getRoom } from "../../mockApi";

function RoomView() {
  const room = getRoom('1');
  return <div>{room.label}</div>;
}

export default RoomView;
