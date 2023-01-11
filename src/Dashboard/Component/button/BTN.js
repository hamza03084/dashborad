import React from "react";

function BTN({ btnName, func }) {
  return (
    <button
      onClick={func}
      className="w-72 sm:w-96 h-10 mt-6 rounded-lg  set-BTN1 text-white"
      style={{ backgroundColor: "#F2385F" }}
    >
      {btnName}
    </button>
  );
}

export default BTN;
