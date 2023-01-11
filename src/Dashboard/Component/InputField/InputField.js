import React, { useState } from "react";

const InputField = ({ label, type, placeholder, FUNC, InputValue }) => {
  return (
    <>
      <div className="p-3 font-bold set-label mb-.5">
        <label>{label}</label>
      </div>

      <input
        placeholder={placeholder}
        value={InputValue}
        onChange={FUNC}
        className="w-72 sm:w-96 h-10 outline-red-600 border color pl-4 rounded-lg "
        type={type}
      />
    </>
  );
};

export default InputField;
