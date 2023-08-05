import React, {
  useRef,
  useEffect,
  createContext,
  useState,
  useContext,
} from "react";
import { SoundObject, Widget } from "../../utils/types";
import "./soundcloud-widget.js";

export interface SocketContextValue {
  sendMessage: (message: string) => void;
  changeRoom: (roomId: string) => void;
  sendChat: (message: ChatMessage) => void;
  sendPlayback: React.Dispatch<React.SetStateAction<string | null>>;
  socketID: string | null;
  chats: ChatMessage[];
  currentSocket: WebSocket | null;
  widget: Widget | null;
  setWidget: React.Dispatch<React.SetStateAction<Widget | null>>;
  sounds: SoundObject[];
  setSounds: React.Dispatch<React.SetStateAction<SoundObject[]>>;
  currentSound: SoundObject | null;
  setCurrentSound: React.Dispatch<React.SetStateAction<SoundObject | null>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SocketContext = createContext<SocketContextValue | null>(null);

export interface ChatMessage {
  message: string;
  senderName: string;
  senderID: string;
}

function SocketProvider({ children }: { children: React.ReactNode }) {
  const socket = useRef<WebSocket | null>(null);

  const [socketID, setSocketID] = useState<string | null>(null);
  
  const [chats, setChats] = useState<ChatMessage[]>([]);

  const [widget, setWidget] = useState<Widget | null>(null);
  const [sounds, setSounds] = useState<SoundObject[]>([]);
  const [currentSound, setCurrentSound] = useState<SoundObject | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Socket methods.

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

  const sendPlayback = (playback: string) => {
    sendMessage({ type: "PLAYBACK", payload: playback });
  };

  // Widget methods

  const play = () => {
    widget.play();
    setIsPlaying(true);
  }

  const pause = () => {
    widget.pause();
    setIsPlaying(false);
  }

  useEffect(() => {
    socket.current = new WebSocket(process.env.REACT_APP_SOCKET_URL);

    return () => {
      if (socket.current) {
        socket.current.close();

        socket.current.onmessage = (event) => {
          const data = JSON.parse(event.data);
    
          if (data.type === "PLAYBACK") {
            if (data.payload === "PAUSE") {
              pause();
            }
            if (data.payload === "PLAY") {
              play();
            }
          }
  
          if (data.type === "CHAT") {
            setChats(data.payload)
          }
    
          if (data.type === "SOCKET_ID") {
            setSocketID(data.payload);
          }  
        };
      }
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        sendMessage,
        changeRoom,
        sendChat,
        sendPlayback: sendPlayback,
        socketID,
        chats,
        currentSocket: socket.current,
        widget,
        setWidget,
        sounds,
        setSounds,
        currentSound,
        setCurrentSound,
        isPlaying,
        setIsPlaying,
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
