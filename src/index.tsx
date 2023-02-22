import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./components/AppRouter";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

root.render(<AppRouter />);
