import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Provider from "./contexts/Provider";
import React from "react";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);