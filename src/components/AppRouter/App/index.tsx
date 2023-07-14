import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as styled from "./styled";
import { useRooms } from "../../RoomsProvider";
import RoomSelection from "./RoomSelection";
import SearchBar from "./SearchBar";
import Button from "../../_base/Button";

function App() {
  const { rooms, loading } = useRooms();

  useEffect(() => {
    console.log(loading);
    console.log(rooms);
  });

  return (
    <styled.App>
      <styled.NavigationBar>
        <styled.RoomsHeader>
          <styled.RoomsTitle>ROOMS</styled.RoomsTitle>
          <Button>CREATE</Button>
        </styled.RoomsHeader>
        <SearchBar />
        {!loading && <RoomSelection roomLabels={rooms} />}
      </styled.NavigationBar>
      <styled.Panel>
        <Outlet />
      </styled.Panel>
    </styled.App>
  );
}

export default App;
