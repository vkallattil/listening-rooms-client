import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import * as styled from "./styled";
import { getRooms } from "../../../api";
import { RoomLabel } from "../../../utils/types";
import RoomSelection from "./components/RoomSelection";
import SearchBar from "./components/SearchBar";
import Button from "../../_base/Button";

export async function loader() {
  const response = await getRooms();
  const roomLabels = response.data;
  return { roomLabels };
}

function App() {
  const { roomLabels } = useLoaderData() as { roomLabels: RoomLabel[] };
  return (
    <styled.App>
      <styled.NavigationBar>
        <styled.RoomsHeader>
          <styled.RoomsTitle>ROOMS</styled.RoomsTitle>
          <Button>CREATE</Button>
        </styled.RoomsHeader>
        <SearchBar />
        <RoomSelection roomLabels={roomLabels} />
      </styled.NavigationBar>
      <styled.Panel>
        <Outlet />
      </styled.Panel>
    </styled.App>
  );
}

export default App;
