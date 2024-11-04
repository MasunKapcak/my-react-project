import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// Şimdi
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// src/main.jsx
