// src/components/DragDropEditor.js
import React, { useState } from "react";
import Tag from "./Tag";
import DropZone from "./DropZone";

const DragDropEditor = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [outputCount, setOutputCount] = useState(0);

  const generateOutput = () => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            /* Add CSS styles if needed */
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;
  };

  const renderHtml = () => {
    const newOutputCount = outputCount + 1;
    setOutputCount(newOutputCount);

    // Create a container for the output box
    const container = document.createElement("div");
    container.style.marginTop = "20px";
    
    // Create a label for the output box
    const label = document.createElement("div");
    label.innerText = `Output Box ${newOutputCount}`;
    label.style.fontWeight = "bold";
    label.style.marginBottom = "5px";

    // Create the iframe for the output box
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "400px";
    iframe.style.border = "1px solid black";
    
    // Append the label and iframe to the container
    container.appendChild(label);
    container.appendChild(iframe);
    document.body.appendChild(container);

    // Write the HTML content to the iframe
    iframe.contentDocument.open();
    iframe.contentDocument.write(generateOutput());
    iframe.contentDocument.close();
  };

  const refreshWindow = () => {
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>
        Drag and drop your tags and click render HTML
      </h1>
      <button
        onClick={refreshWindow}
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Refresh Window
      </button>
      <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Tag name="div" />
        <Tag name="h1" />
        <Tag name="p" />
        <Tag name="span" />
        <Tag name="a" />
        <Tag name="ul" />
        <Tag name="li" />
        <Tag name="table" />
        <Tag name="tr" />
        <Tag name="td" />
        <Tag name="form" />
        <Tag name="input" />
        <Tag name="button" />
        <Tag name="img" />
        <Tag name="header" />
        <Tag name="footer" />
        <Tag name="section" />
        <Tag name="article" />
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
        <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "5px", padding: "10px" }}>
          <label
            htmlFor="drop-zone"
            style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
          >
            Drop Zone
          </label>
          <DropZone onContentChange={setHtmlContent} />
        </div>
        <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "5px", padding: "10px" }}>
          <label
            htmlFor="html-output"
            style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}
          >
            HTML Output:
          </label>
          <textarea
            id="html-output"
            value={generateOutput()}
            readOnly
            style={{
              width: "100%",
              height: "200px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              fontFamily: "monospace",
            }}
          />
          <button
            onClick={renderHtml}
            style={{ marginTop: "10px", padding: "10px", fontSize: "16px", cursor: "pointer", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "5px" }}
          >
            Render HTML
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragDropEditor;
