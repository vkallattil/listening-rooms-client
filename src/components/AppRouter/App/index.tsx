import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import * as styled from "./styled";
import { getRooms } from "../../../api";
import { RoomLabel } from "../../../utils/types";
import RoomSelection from "./RoomSelection";
import SearchBar from "./SearchBar";
import Button from "../../_base/Button";

export async function loader() {
  // const response = await getRooms();
  // const roomLabels = response.data;
  // return { roomLabels };
  await setTimeout(() => {}, 1000);
  return {
    roomLabels: [
      {
        id: "1",
        label: "Room 1",
        isPrivate: false,
        songUrl:
          "https://soundcloud.com/premierhiphopdaily/toomanychances?si=00da0a6bc9354fb0a76b0197d345f813&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  };
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
