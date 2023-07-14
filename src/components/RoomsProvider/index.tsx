import React, { createContext, useContext, useEffect, useState } from "react";
import { getRooms } from "../../api";

interface RoomsProviderProps {
  children: React.ReactNode;
}

const RoomsContext = createContext(null);

function RoomsProvider({ children }: RoomsProviderProps) {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    if (loading) {
      getRooms().then((response) => {
        setRooms(response.data);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <RoomsContext.Provider value={{ rooms, loading }}>
      {children}
    </RoomsContext.Provider>
  );
}

export function useRooms() {
  const { rooms, loading } = useContext(RoomsContext);
  return { rooms, loading };
}

export default RoomsProvider;
