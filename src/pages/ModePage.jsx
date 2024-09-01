// src/pages/ModePage.js
import React, { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

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

const ModePage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div style={themes[theme]}>
      <h1>Mode Page</h1>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default ModePage;

