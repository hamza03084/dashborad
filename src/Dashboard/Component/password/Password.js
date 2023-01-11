import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Password({ label, placeholder, FUNC, InputValue }) {
  const [eye, setEye] = useState(false);

  return (
    <div>
      <div className="p-3 font-bold set-label mb-.5">
        <label>{label}</label>
      </div>

      <div className="w-fit relative">
        <input
          placeholder={placeholder}
          className="w-72 sm:w-96 outline-red-600 h-10 border color  pl-4 rounded-lg"
          type={!eye ? "password" : "text"}
          value={InputValue}
          onChange={FUNC}
        />
        <div className="absolute  pr-2 pt-2  right-0 top-0">
          {eye && (
            <FontAwesomeIcon
              onClick={() => setEye(false)}
              className="h-6 w-6 cursor-pointer"
              icon={faEye}
            />
          )}
          {!eye && (
            <FontAwesomeIcon
              icon={faEyeSlash}
              onClick={() => setEye(true)}
              className="h-6 w-6 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Password;
