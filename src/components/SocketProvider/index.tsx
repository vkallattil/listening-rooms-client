import React, {
  useRef,
  useEffect,
  createContext,
  useState,
  useContext,
} from "react";
import { useWidget } from "../WidgetProvider";

export interface SocketContextValue {
  sendMessage: (message: string) => void;
  changeRoom: (roomId: string) => void;
  setSendPlayback: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SocketContext = createContext<SocketContextValue | null>(null);

function SocketProvider({ children }: { children: React.ReactNode }) {
  const socket = useRef<WebSocket | null>(null);

  const [receivedPlayback, setReceivedPlayback] = useState<string | null>(null);
  const [sendPlayback, setSendPlayback] = useState<string | null>(null);

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
    } else if (sendPlayback === "PLAY") {
      console.log("SEND PLAY");
    }
  }, [sendPlayback]);

  useEffect(() => {
    if (receivedPlayback) {
      if (receivedPlayback === "PLAY") {
        console.log("RECEIVE PLAY");
      } else if (receivedPlayback === "PAUSE") {
        console.log("RECEIVE PAUSE");
      }
    }
  }, [receivedPlayback]);

  useEffect(() => {
    socket.current = new WebSocket(
      "ws://listening-rooms-api.onrender.com/socket"
    );

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
        setSendPlayback,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}

export default SocketProvider;
