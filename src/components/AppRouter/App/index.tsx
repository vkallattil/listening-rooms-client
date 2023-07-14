import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import * as styled from "./styled";
import { useRooms } from "../../RoomsProvider";
import RoomSelection from "./RoomSelection";
import SearchBar from "./SearchBar";
import Button from "../../_base/Button";

function App() {
  const navigate = useNavigate();
  const { rooms, loading } = useRooms();

  return (
    <styled.App>
      <styled.NavigationBar>
        <styled.RoomsHeader>
          <styled.RoomsTitle>ROOMS</styled.RoomsTitle>
          <Button
            onClick={() => {
              navigate("/create-room");
            }}
          >
            CREATE
          </Button>
        </styled.RoomsHeader>
        <SearchBar />
        <RoomSelection roomLabels={rooms} loading={loading} />
      </styled.NavigationBar>
      <styled.Panel>
        <Outlet />
      </styled.Panel>
    </styled.App>
  );
}

export default App;
