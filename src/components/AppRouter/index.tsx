// React app router and directory index for all routed components.
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RoomView from "./RoomView";
import IndexPage from "./IndexPage";
import SocketProvider from "../SocketContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/rooms/:roomId",
        element: <RoomView />,
      },
    ],
  },
]);

function AppRouter() {
  return <SocketProvider><RouterProvider router={router} /></SocketProvider>;
}

export default AppRouter;
