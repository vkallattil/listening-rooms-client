import React, { createContext, useState, useContext } from "react";
import { SoundObject, Widget } from "../../utils/types";
import "./soundcloud-widget.js";

export interface WidgetContextValue {
  widget: Widget | null;
  setWidget: React.Dispatch<React.SetStateAction<Widget | null>>;
  sounds: SoundObject[];
  setSounds: React.Dispatch<React.SetStateAction<SoundObject[]>>;
  currentSound: SoundObject | null;
  setCurrentSound: React.Dispatch<React.SetStateAction<SoundObject | null>>;
}

export const WidgetContext = createContext<WidgetContextValue | null>(null);

function WidgetProvider({ children }: { children: React.ReactNode }) {
  const [widget, setWidget] = useState<Widget | null>(null);
  const [sounds, setSounds] = useState<SoundObject[]>([]);
  const [currentSound, setCurrentSound] = useState<SoundObject | null>(null);

  return (
    <WidgetContext.Provider
      value={{
        widget,
        setWidget,
        sounds,
        setSounds,
        currentSound,
        setCurrentSound,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}

export function useWidget() {
  return useContext(WidgetContext);
}

export default WidgetProvider;
