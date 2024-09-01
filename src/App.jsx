// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HomePage from "./pages/HomePage";
import ModePage from "./pages/ModePage";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/mode" element={<ModePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </DndProvider>
  );
};

export default App;

