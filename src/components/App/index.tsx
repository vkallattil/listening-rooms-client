import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import style from "./index.css";
import { getRooms } from "../../api";
import { Room } from "../../types";
import RoomSelection from "../RoomSelection";
import SearchBar from "../SearchBar";

export async function loader() {
  const response = await getRooms();
  const rooms = response.data;
  return { rooms };
}

function App() {
  const { rooms } = useLoaderData() as { rooms: Room[] };
  return (
    <>
      <div className={style.roomSelection}>
        <div className={style.rooms}>
          <div className={style.roomsHeader}>
            <div className={style.roomsTitle}>ROOMS</div>
            <button className={style.createRoom}>CREATE</button>
          </div>
          <SearchBar />
          <RoomSelection rooms={rooms} />
        </div>
        <div className={style.panel}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
