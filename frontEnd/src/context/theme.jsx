import React, { createContext, useContext, useState, useEffect } from "react";

// Create ThemeContext
const ThemeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
});

// ThemeProvider Component
export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  // Toggle between light and dark mode
  const toggleTheme = () => {
    console.log("button pr click to ho raha hain 1");
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    console.log("button pr click to ho raha hain 2");
  };

  // Apply themeMode to the <html> element
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
