import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomSelection, { loader as roomsLoader } from "../RoomSelection";
import Room, { loader as roomLoader } from "../RoomView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoomSelection />,
    loader: roomsLoader,
    children: [
      {
        index: true,
        element: <div>Select a room</div>,
      },
      {
        path: "/rooms/:roomId",
        element: <Room />,
        loader: roomLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
