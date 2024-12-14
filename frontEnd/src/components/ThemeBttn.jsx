import React from "react";
import { useTheme } from "../context/theme.jsx";

export default function ThemeToggleButton() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button onClick={() => toggleTheme()} >
      Switch to {themeMode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
