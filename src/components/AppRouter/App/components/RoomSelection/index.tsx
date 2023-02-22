import React from "react";
import { Room } from "../../../../../types";
import RoomSelectionButton from "../RoomSelectionButton";
import * as styled from "./styled";

interface RoomSelectionProps {
  rooms: Room[];
}

function RoomSelection({ rooms }: RoomSelectionProps) {
  return (
    <styled.RoomSelectionContainer>
      {rooms.map(({ label, id, isPrivate, userCount }, index) => {
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
        if (index === rooms.length - 1)
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
