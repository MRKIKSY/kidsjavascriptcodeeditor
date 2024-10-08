// // src/pages/HomePage.js
// import React from "react";
// import DragDropEditor from "../components/DragDropEditor";
// import TagKeyboard from "../components/TagKeyboard";

// const HomePage = () => {
//   const handleTagSelect = (tag) => {
//     console.log(`Selected tag: ${tag}`);
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1 style={{ marginBottom: "20px" }}>
//         Mr Kiksy Educational App Learn HTML & CSS
//         <br />
//         <span style={{ fontSize: "18px", fontWeight: "normal", color: "#666" }}>
//            Designed for kids between the ages of 7-12. 
//           Learn HTML & CSS by drag and drop. This script was built by MR KIKSY, Full Stack Javascript developer. 
//           <a href="https://portfoliowebsite-w7b6.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#2196F3", textDecoration: "none" }}>
//             Portfolio
//           </a> (c) all rights reserved.
//         </span>
//       </h1>
//       <TagKeyboard onTagSelect={handleTagSelect} />
//       <DragDropEditor />
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import DragDropEditor from "../components/DragDropEditor";
import TagKeyboard from "../components/TagKeyboard";
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  const handleTagSelect = (tag) => {
    console.log(`Selected tag: ${tag}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <header className="header">
        <h1>MR KIKSY KIDS CODE EDITOR (C) ALL RIGHTS RESERVED</h1>
        <h7> This script was built by MR KIKSY, Full Stack Javascript developer. 
          <a href="https://portfoliowebsite-w7b6.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#2196F3", textDecoration: "none" }}>
            Portfolio
          </a> (c) all rights reserved. </h7>
      </header>
      <h1 style={{ marginBottom: "20px" }}>
        Designed for kids between the ages of 7-16 years.<br></br>
      <br />
        </h1>
     
      <TagKeyboard onTagSelect={handleTagSelect} />
      <DragDropEditor />
    </div>
  );
};

export default HomePage;
