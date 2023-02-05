import React from "react";
import RoomSelection, { loader as roomsLoader } from "../RoomSelection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        path: "/room/:roomId",
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
