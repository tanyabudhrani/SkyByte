// src/index.js (or src/main.jsx)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // If you're using Tailwind or other global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
