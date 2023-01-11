import React from "react";

function FlexTex({ flexName }) {
  return (
    <div>
      <span className="flex py-1">
        <input type="checkbox" />
        <p className="px-2">{flexName}</p>
      </span>
    </div>
  );
}

export default FlexTex;
