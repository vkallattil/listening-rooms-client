// React app router and directory index for all routed components.

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RoomView from "./RoomView";
import IndexPage from "./IndexPage";
import SocketProvider from "../SocketProvider";
import RoomsProvider from "../RoomsProvider";
import CreateEditRoom from "./CreateEditRoom";
import WidgetProvider from "../WidgetProvider";

const rootElement = (
  <SocketProvider>
    <WidgetProvider>
      <RoomsProvider>
        <App />
      </RoomsProvider>
    </WidgetProvider>
  </SocketProvider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: rootElement,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/rooms/:roomId",
        element: <RoomView />,
      },
      {
        path: "/create-room",
        element: <CreateEditRoom />,
      },
      {
        path: "/edit-room/:roomId",
        element: <CreateEditRoom />,
      },
    ],
  },
]);

function AppRouter() {
  return (
    <SocketProvider>
      <WidgetProvider>
        <RoomsProvider>
          <RouterProvider router={router} />
        </RoomsProvider>
      </WidgetProvider>
    </SocketProvider>
  );
}

export default AppRouter;
