import React from "react";
import RoomSelection from "../RoomSelection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Room from "../RoomView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoomSelection />,
    children: [
      {
        path: "/room/:roomId",
        element: <Room />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
