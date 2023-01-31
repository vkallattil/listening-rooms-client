import React from "react";
import { Outlet } from "react-router-dom";
import { Room } from "../Room/interface";
import "./index.css";
import RoomSelectionButton from "./RoomSelectionButton";

interface RoomSelectionProps {
  rooms: Array<Room>;
}

function RoomSelection({ rooms }: RoomSelectionProps) {
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
