import React from "react";
import LockPass from "../images/LockPass.png";

function Lock({ passtext }) {
  return (
    <div>
      <div className="flex set-imagesize py-8 justify-center">
        <img src={LockPass} alt="logo" className="h-full max-w-fit set-image" />
      </div>

      <h1 className="flex text-xs sm:text-xl lg:text-2xl font-bold justify-center ">
        {passtext}{" "}
      </h1>
    </div>
  );
}

export default Lock;
