import React from "react";
import { RoomLabel } from "../../../../utils/types";
import RoomSelectionButton from "../RoomSelectionButton";
import * as styled from "./styled";

interface RoomSelectionProps {
  roomLabels: RoomLabel[];
  loading: boolean;
}

function RoomSelection({ roomLabels, loading }: RoomSelectionProps) {
  if (loading) return <div>Loading...</div>
  return (
    <styled.RoomSelectionContainer>
      {roomLabels.map(({ label, id }, index) => {
        if (index === 0)
          return (
            <RoomSelectionButton
              key={id}
              label={label}
              id={id}
            />
          );
        if (index === roomLabels.length - 1)
          return (
            <RoomSelectionButton
              key={id}
              label={label}
              id={id}
            />
          );
        return (
          <RoomSelectionButton
            key={id}
            label={label}
            id={id}
          />
        );
      })}
    </styled.RoomSelectionContainer>
  );
}

export default RoomSelection;
