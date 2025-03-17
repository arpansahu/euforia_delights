import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";               // Base styles & slick carousel CSS
import "./styles/slick-overrides.css"; // Slick custom overrides
import "./styles/auto-zoom.css";       // Auto-zoom effect

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
