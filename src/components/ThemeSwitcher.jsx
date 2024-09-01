// src/components/ThemeSwitcher.js
import React from "react";

const themes = {
  light: {
    background: "white",
    color: "black",
  },
  dark: {
    background: "black",
    color: "white",
  },
};

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
