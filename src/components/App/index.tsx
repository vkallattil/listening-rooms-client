import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import * as styled from "./styled";
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
    <styled.App>
      <styled.NavigationBar>
        <styled.RoomsHeader>
          <styled.RoomsTitle>ROOMS</styled.RoomsTitle>
          <styled.CreateRoomButton>CREATE</styled.CreateRoomButton>
        </styled.RoomsHeader>
        <SearchBar />
        <RoomSelection rooms={rooms} />
      </styled.NavigationBar>
      <styled.Panel>
        <Outlet />
      </styled.Panel>
    </styled.App>
  );
}

export default App;
