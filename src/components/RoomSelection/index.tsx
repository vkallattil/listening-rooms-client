import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./index.css";
import RoomSelectionButton from "./RoomSelectionButton";
import { getRooms } from "../../api";
import { Room } from "../../types";

export async function loader() {
  const response = await getRooms();
  const rooms = response.data
  return { rooms };
}

function RoomSelection() {
  const { rooms } = useLoaderData() as { rooms: Room[] };
  return (
    <>
      <div className="room-selection">
        <div className="rooms">
          {rooms.map(({ label, id }) => (
            <RoomSelectionButton key={id} id={id} label={label} />
          ))}
        </div>
        <div className="panel">
          <Outlet />
        </div>
        <div className="actions">
          <button>Create Room</button>
        </div>
      </div>
    </>
  );
}

export default RoomSelection;
