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
  sendSeek: (position: number) => void;
  sendSkip: (position: number) => void;
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
  songPosition: number;
  setSongPosition: React.Dispatch<React.SetStateAction<number>>;
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
  const [songPosition, setSongPosition] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Socket methods.

  const sendMessage = (message: any) => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(JSON.stringify(message));
    }
  };

  const changeRoom = (roomID: string | null) => {
    sendMessage({ type: "CHANGE_ROOM", payload: roomID });
  };

  const sendChat = (chatMessage: ChatMessage) => {
    sendMessage({ type: "CHAT", payload: chatMessage });
  };

  const sendPlayback = (playback: string) => {
    sendMessage({ type: "PLAYBACK", payload: playback });
  };

  const sendSkip = (id: number) => {
    sendMessage({ type: "SKIP", payload: id });
  };

  const sendSeek = (position: number) => {
    sendMessage({ type: "SEEK", payload: position });
  };

  // Widget methods

  const play = () => {
    widget.play();
    setIsPlaying(true);
  };

  const pause = () => {
    widget.pause();
    setIsPlaying(false);
  };

  const seek = (position: number) => {
    widget.seekTo(position);
  }

  const skip = (id: number) => {
    widget.skip(id);
    widget.getCurrentSound((currentSound: SoundObject) => {
      setCurrentSound(currentSound);
    });
    widget.getPosition((position: number) => {
      setSongPosition(position);
    });
  }

  useEffect(() => {
    socket.current = new WebSocket(process.env.REACT_APP_SOCKET_URL);

    // Widget can't play or pause if it's not loaded.
    if (widget) {
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

        if (data.type === "SEEK") {
          seek(data.payload);
        }

        if (data.type === "SKIP") {
          skip(data.payload);
        }

        if (data.type === "CHAT") {
          setChats(data.payload);
        }

        if (data.type === "SOCKET_ID") {
          setSocketID(data.payload);
        }
      };
    }

    return () => {
      socket.current.close();
    };
  }, [widget]);

  return (
    <SocketContext.Provider
      value={{
        sendMessage,
        changeRoom,
        sendChat,
        sendPlayback,
        sendSkip,
        sendSeek,
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
        songPosition,
        setSongPosition,
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
