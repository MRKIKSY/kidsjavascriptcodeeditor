// // src/components/DropZone.js
// import React, { useState, useCallback } from "react";
// import { useDrop } from "react-dnd";

// const ItemTypes = {
//   TAG: "tag",
// };

// const DropZone = ({ onContentChange }) => {
//   const [content, setContent] = useState("");
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemTypes.TAG,
//     drop: (item) => handleDrop(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }), [onContentChange]);

//   const handleDrop = useCallback((item) => {
//     setContent((prev) => {
//       const newContent = `${prev}<${item.name}></${item.name}>`;
//       onContentChange(newContent);
//       return newContent;
//     });
//   }, [onContentChange]);

//   const handleInputChange = (e) => {
//     const newContent = e.target.value;
//     setContent(newContent);
//     onContentChange(newContent);
//   };

//   return (
//     <div>
//       <label
//         htmlFor="drop-zone-text"
//         style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
//       >
//         Drop Zone:
//       </label>
//       <div
//         ref={drop}
//         id="drop-zone"
//         style={{
//           border: "1px solid black",
//           padding: "20px",
//           minHeight: "200px",
//           backgroundColor: isOver ? "lightgreen" : "white",
//           whiteSpace: "pre-wrap",
//           fontFamily: "monospace",
//           boxSizing: "border-box",
//         }}
//       >
//         <textarea
//           id="drop-zone-text"
//           value={content}
//           onChange={handleInputChange}
//           placeholder="Drag and drop your tags here"
//           style={{
//             width: "100%",
//             height: "150px",
//             border: "none",
//             outline: "none",
//             resize: "none",
//             fontFamily: "monospace",
//             boxSizing: "border-box",
//             padding: "5px",
//             background: "inherit", // Makes textarea background blend with DropZone background
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default DropZone;
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
        style={{ display: "block", marginBottom: "10px", fontWeight: "bold", color: "#ffffff" }}
      >
        Drop Zone:
      </label>
      <div
        ref={drop}
        id="drop-zone"
        style={{
          border: "1px solid #333333", // Darker border
          padding: "20px",
          minHeight: "200px",
          backgroundColor: isOver ? "#2c2c2c" : "#1e1e1e", // Black theme like VS Code
          whiteSpace: "pre-wrap",
          fontFamily: "'Fira Code', monospace", // Monospace font for code
          boxSizing: "border-box",
          color: "#d4d4d4", // Light gray text color like VS Code
          transition: "background-color 0.3s ease", // Smooth transition when dragging
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
            fontFamily: "'Fira Code', monospace",
            boxSizing: "border-box",
            padding: "5px",
            background: "inherit", // Matches DropZone background
            color: "#d4d4d4", // Light gray for the text area
            caretColor: "#9cdcfe", // Light blue caret like VS Code
          }}
        />
      </div>
    </div>
  );
};

export default DropZone;
