"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

//-----------provider------------------
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    setIsDark(localStorage.getItem("isDark") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
//----------------------------------


  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
//------------------theme-provider-end-----------------------