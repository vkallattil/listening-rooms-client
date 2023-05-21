import React, { useRef, useEffect, createContext, useState } from "react";
import { Widget } from "../../utils/types"
import "./soundcloud-widget.js";

export interface SocketContextValue {
  sendMessage: (message: string) => void;
  changeRoom: (roomId: string) => void;
  widget: Widget | null;
  setWidget: React.Dispatch<React.SetStateAction<Widget | null>>;
  setSendPlayback: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SocketContext = createContext<SocketContextValue | null>(null);

function SocketProvider({ children }: { children: React.ReactNode }) {
  const socket = useRef<WebSocket | null>(null);

  const [receivedPlayback, setReceivedPlayback] = useState<string | null>(null);
  const [sendPlayback, setSendPlayback] = useState<string | null>(null);
  const [widget, setWidget] = useState<Widget | null>(null);

  const sendMessage = (message: any) => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(JSON.stringify(message));
    }
  };

  const changeRoom = (roomId: string) => {
    sendMessage({ type: "CHANGE_ROOM", payload: roomId });
  };

  useEffect(() => {
    if (sendPlayback === "PAUSE") {
      console.log("SEND PAUSE");
      sendMessage({ type: "PLAYBACK", payload: "PAUSE" });
    } else if (sendPlayback === "PLAY") {
      console.log("SEND PLAY");
      sendMessage({ type: "PLAYBACK", payload: "PLAY" });
    }
  }, [sendPlayback]);

  useEffect(() => {
    if (receivedPlayback) {
      if (receivedPlayback === "PLAY") {
        console.log("RECEIVE PLAY");
        widget?.play();
      } else if (receivedPlayback === "PAUSE") {
        console.log("RECEIVE PAUSE");
        widget?.pause();
      }
    }
  }, [receivedPlayback]);

  useEffect(() => {
    socket.current = new WebSocket("ws://localhost:8081/socket");

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "PLAYBACK") {
        setReceivedPlayback(data.payload);
      }
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        sendMessage,
        changeRoom,
        widget,
        setWidget,
        setSendPlayback,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
