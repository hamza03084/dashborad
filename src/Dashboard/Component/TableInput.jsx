import React from "react";

function TableInput({ label }) {
  return (
    <div className="py-3 md:py-0">
      <div>
        <label className="my-3 font-semibold" htmlFor="input">
          {label}
        </label>
      </div>
      <input
        type="text"
        className="w-[100%] outline-none bg-[#F0F0F0] h-12 px-2 rounded-lg border-black"
        placeholder="Type here"
      />
    </div>
  );
}

export default TableInput;
