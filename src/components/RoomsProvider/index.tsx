import React, { createContext, useContext, useEffect, useState } from "react";
import { getRooms, postRoom } from "../../api";
import { Room } from "../../utils/types";

interface RoomsProviderProps {
  children: React.ReactNode;
}

const RoomsContext = createContext(null);

function RoomsProvider({ children }: RoomsProviderProps) {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState(null);

  const createRoom = (room: Room) => {
    postRoom(room).then((response) => {
      if (response.status === 201) {
        setLoading(true)
      }
    });
  };

  useEffect(() => {
    if (loading) {
      getRooms().then((response) => {
        setRooms(response.data);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <RoomsContext.Provider value={{ rooms, loading, createRoom }}>
      {children}
    </RoomsContext.Provider>
  );
}

export function useRooms() {
  const { rooms, loading, createRoom } = useContext(RoomsContext);
  return { rooms, loading, createRoom };
}

export default RoomsProvider;
