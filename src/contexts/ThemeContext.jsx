import React, { useEffect } from "react";
import { THEMES } from "@/constants";

const initialState = {
  theme: THEMES.DEFAULT,
  setTheme: () => {},
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [theme, _setTheme] = React.useState(initialState.theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      try {
        _setTheme(JSON.parse(storedTheme));
      } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
        // Optionally, you can reset to the default theme if parsing fails
        _setTheme(THEMES.DEFAULT);
      }
    }
  }, []);

  const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
