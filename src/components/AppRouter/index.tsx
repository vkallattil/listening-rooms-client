// React app router and directory index for all routed components.
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as roomsLoader } from "./App";
import RoomView, { loader as roomLoader } from "./RoomView";
import IndexPage from "./IndexPage";
import SocketProvider from "../SocketContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: roomsLoader,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/rooms/:roomId",
        element: <RoomView />,
        loader: roomLoader,
      },
    ],
  },
]);

function AppRouter() {
  return <SocketProvider><RouterProvider router={router} /></SocketProvider>;
}

export default AppRouter;
