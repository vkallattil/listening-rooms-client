import React from "react";
import { RoomLabel } from "../../../../../utils/types";
import RoomSelectionButton from "../RoomSelectionButton";
import * as styled from "./styled";

interface RoomSelectionProps {
  roomLabels: RoomLabel[];
}

function RoomSelection({ roomLabels }: RoomSelectionProps) {
  return (
    <styled.RoomSelectionContainer>
      {roomLabels.map(({ label, id, isPrivate, userCount }, index) => {
        if (index === 0)
          return (
            <RoomSelectionButton
              isPrivate={isPrivate}
              userCount={userCount}
              key={id}
              label={label}
              id={id}
            />
          );
        if (index === roomLabels.length - 1)
          return (
            <RoomSelectionButton
              isPrivate={isPrivate}
              userCount={userCount}
              key={id}
              label={label}
              id={id}
            />
          );
        return (
          <RoomSelectionButton
            isPrivate={isPrivate}
            userCount={userCount}
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
