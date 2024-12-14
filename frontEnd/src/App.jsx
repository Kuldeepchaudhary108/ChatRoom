import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
