import React from "react";
import facebook from "../images/facebook.png";
import google from "../images/google.png";

function Icons({ style }) {
  return (
    <div>
      <div className={style}>
        <a href="">
          <img
            className="w-10 h-10 ml-4 rounded-full"
            src={facebook}
            alt="logo"
          />
        </a>
        <a href="">
          <img
            className="w-10 h-10 ml-4 rounded-full"
            src={google}
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Icons;
