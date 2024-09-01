// src/components/TagKeyboard.js
import React, { useState } from "react";

const TagKeyboard = ({ onTagSelect }) => {
  const [input, setInput] = useState("");
  const tags = ["div", "h1", "p", "span", "a"];

  const filteredTags = tags.filter((tag) =>
    tag.startsWith(input)
  );

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing a tag..."
      />
      <div>
        {filteredTags.map((tag) => (
          <button key={tag} onClick={() => onTagSelect(tag)}>
            {`<${tag}>`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagKeyboard;
