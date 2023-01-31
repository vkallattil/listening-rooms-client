import React from "react";
import RoomSelection from "../RoomSelection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Room from "../Room";

const rooms = [
  { id: "1", label: "Room 1" },
  { id: "2", label: "Room 2" },
  { id: "3", label: "Room 3" },
  { id: "4", label: "Room 4" },
  { id: "5", label: "Room 5" },
  { id: "6", label: "Room 6" },
  { id: "7", label: "Room 7" },
  { id: "8", label: "Room 8" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoomSelection rooms={rooms} />,
    children: [
      {
        path: "/room/:roomId",
        element: <Room rooms={rooms} />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
