import React, { createContext, useContext, useEffect, useState } from "react";
import { getRooms, postRoom, deleteRoom } from "../../api";
import { Room } from "../../utils/types";

interface RoomsProviderProps {
  children: React.ReactNode;
}

const RoomsContext = createContext(null);

function RoomsProvider({ children }: RoomsProviderProps) {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState(null);

  const createRoom = (room: Room) => {
    return postRoom(room).then((response) => {
      if (response.status === 201) {
        setLoading(true);
      }

      return response.data
    });
  };

  const removeRoom = (id: string) => {
    return deleteRoom(id).then((response) => {
      if (response.status === 200) {
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
    <RoomsContext.Provider value={{ rooms, loading, createRoom, removeRoom }}>
      {children}
    </RoomsContext.Provider>
  );
}

export function useRooms() {
  const { rooms, loading, createRoom, removeRoom } = useContext(RoomsContext);
  return { rooms, loading, createRoom, removeRoom };
}

export default RoomsProvider;
