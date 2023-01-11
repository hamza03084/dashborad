import React from "react";
import BTN from "../Component/button/BTN";
import InputField from "../Component/InputField/InputField";
import Password from "../Component/password/Password";

function Profile() {
  return (
    <div className="absolute  bg-[#F8F8F8] sm:left-32 md:left-[30%] lg:left-[36%] left-[17%]">
      <InputField
        label={"First Name"}
        placeholder="Enter Your FirstName"
        type="text"
      />
      <InputField
        label={"LastName"}
        placeholder="Enter Your LastName"
        type="text"
      />
      <Password label={"Password"} placeholder="Enter your Password" />
      <Password
        label={"Confirm Password"}
        placeholder="Confirm your Password"
      />
      <BTN btnName={"Profile"} />
    </div>
  );
}

export default Profile;
