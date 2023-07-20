import React, { createContext, useState, useContext } from "react";
import { Widget } from "../../utils/types"
import "./soundcloud-widget.js";

export interface WidgetContextValue {
  widget: Widget | null;
  setWidget: React.Dispatch<React.SetStateAction<Widget | null>>;
}

export const WidgetContext = createContext<WidgetContextValue | null>(null);

function WidgetProvider({ children }: { children: React.ReactNode }) {
  const [widget, setWidget] = useState<Widget | null>(null);

  return (
    <WidgetContext.Provider
      value={{
        widget,
        setWidget,
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
