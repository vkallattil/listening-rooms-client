import React from "react"
import "./index.css";
import RoomSelection from "./RoomSelection";

function App() {
  return <div className="container">
    <RoomSelection rooms={[{ id: "1", label: "Room 1", }]} />
  </div>
}

export default App