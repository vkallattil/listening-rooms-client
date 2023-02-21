import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as roomsLoader } from "../App";
import Room, { loader as roomLoader } from "../RoomView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
