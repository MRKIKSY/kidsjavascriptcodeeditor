// src/pages/HomePage.js
import React from "react";
import DragDropEditor from "../components/DragDropEditor";
import TagKeyboard from "../components/TagKeyboard";

const HomePage = () => {
  const handleTagSelect = (tag) => {
    console.log(`Selected tag: ${tag}`);
  };

  return (
    <div>
      <h1>Learn HTML & CSS</h1>
      <TagKeyboard onTagSelect={handleTagSelect} />
      <DragDropEditor />
    </div>
  );
};

export default HomePage;
