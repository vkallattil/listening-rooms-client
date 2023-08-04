import React, {
  useRef,
  useEffect,
  createContext,
  useState,
  useContext,
} from "react";

export interface SocketContextValue {
  sendMessage: (message: string) => void;
  receivedPlayback: string | null;
  changeRoom: (roomId: string) => void;
  sendChat: (message: ChatMessage) => void;
  sendPlayback: React.Dispatch<React.SetStateAction<string | null>>;
  socketID: string | null;
  chats: ChatMessage[];
  currentSocket: WebSocket | null;
}

export const SocketContext = createContext<SocketContextValue | null>(null);

export interface ChatMessage {
  message: string;
  senderName: string;
  senderID: string;
}

function SocketProvider({ children }: { children: React.ReactNode }) {
  const socket = useRef<WebSocket | null>(null);

  const [receivedPlayback, setReceivedPlayback] = useState<string | null>(null);
  const [sendPlayback, setSendPlayback] = useState<string | null>(null);
  const [socketID, setSocketID] = useState<string | null>(null);
  const [chats, setChats] = useState<ChatMessage[]>([])

  const sendMessage = (message: any) => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(JSON.stringify(message));
    }
  };

  const changeRoom = (roomID: string | null) => {
    console.log("Changing to room in changeRoom: " + roomID)
    sendMessage({ type: "CHANGE_ROOM", payload: roomID });
  };

  const sendChat = (chatMessage: ChatMessage) => {
    sendMessage({ type: "CHAT", payload: chatMessage });
  };

  const sendPlaybackMessage = (playback: string) => {
    sendMessage({ type: "PLAYBACK", payload: playback });
  };

  useEffect(() => {
    if (sendPlayback === "PAUSE") {
      sendPlaybackMessage("PAUSE");
    } else if (sendPlayback === "PLAY") {
      sendPlaybackMessage("PLAY");
    }
  }, [sendPlayback]);

  useEffect(() => {
    socket.current = new WebSocket(process.env.REACT_APP_SOCKET_URL);

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "PLAYBACK") {
        setReceivedPlayback(data.payload);
      }

      if (data.type === "CHAT") {
        setChats(data.payload)
      }

      if (data.type === "SOCKET_ID") {
        setSocketID(data.payload);
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
        sendChat,
        sendPlayback: setSendPlayback,
        socketID,
        chats,
        currentSocket: socket.current,
        receivedPlayback
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
