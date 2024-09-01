// src/components/Tag.js
import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  TAG: "tag",
};

const Tag = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TAG,
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        marginBottom: "10px",
      }}
    >
      {`<${name}>`}
    </div>
  );
};

export default Tag;
