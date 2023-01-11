import React from "react";

function TableComp({ label = "SHOW BY" }) {
  return (
    <div className="basis-1/5 ">
      <label className="font-semibold">{label}</label>
      <select className=" cursor-pointer outline-none relative w-full  rounded-lg bg-gray-300 h-12 ">
        <option>row24</option>
        <option>row23</option>
        <option>row22</option>
      </select>
    </div>
  );
}

export default TableComp;
