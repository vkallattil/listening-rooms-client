import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import * as styled from "./styled";
import { getRooms } from "../../../api";
import { RoomLabel } from "../../../utils/types";
import RoomSelection from "./RoomSelection";
import SearchBar from "./SearchBar";
import Button from "../../_base/Button";

function App() {
  const handleCreate = () => {
    console.log("create")
  }

  return (
    <styled.App>
      <styled.NavigationBar>
        <styled.RoomsHeader>
          <styled.RoomsTitle>ROOMS</styled.RoomsTitle>
          <Button onClick={handleCreate}>CREATE</Button>
        </styled.RoomsHeader>
        <SearchBar />
        <RoomSelection roomLabels={[]} />
      </styled.NavigationBar>
      <styled.Panel>
        <Outlet />
      </styled.Panel>
    </styled.App>
  );
}

export default App;
