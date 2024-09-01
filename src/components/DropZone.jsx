// src/components/DropZone.js
import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";

const ItemTypes = {
  TAG: "tag",
};

const DropZone = ({ onContentChange }) => {
  const [content, setContent] = useState("");
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TAG,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [onContentChange]);

  const handleDrop = useCallback((item) => {
    setContent((prev) => {
      const newContent = `${prev}<${item.name}></${item.name}>`;
      onContentChange(newContent);
      return newContent;
    });
  }, [onContentChange]);

  const handleInputChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onContentChange(newContent);
  };

  return (
    <div>
      <label
        htmlFor="drop-zone-text"
        style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
      >
        Drop Zone:
      </label>
      <div
        ref={drop}
        id="drop-zone"
        style={{
          border: "1px solid black",
          padding: "20px",
          minHeight: "200px",
          backgroundColor: isOver ? "lightgreen" : "white",
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          boxSizing: "border-box",
        }}
      >
        <textarea
          id="drop-zone-text"
          value={content}
          onChange={handleInputChange}
          placeholder="Drag and drop your tags here"
          style={{
            width: "100%",
            height: "150px",
            border: "none",
            outline: "none",
            resize: "none",
            fontFamily: "monospace",
            boxSizing: "border-box",
            padding: "5px",
            background: "inherit", // Makes textarea background blend with DropZone background
          }}
        />
      </div>
    </div>
  );
};

export default DropZone;
