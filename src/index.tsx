import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./components/AppRouter";
import style from "./index.css"

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

root.render(
  <div className="container">
    <AppRouter />
  </div>
);
