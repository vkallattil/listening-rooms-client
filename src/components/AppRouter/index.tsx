import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as roomsLoader } from "../App";
import Room, { loader as roomLoader } from "../RoomView";
import IndexPage from "../IndexPage";

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
