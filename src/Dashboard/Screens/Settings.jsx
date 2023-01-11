import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FlexTex from "../Component/FlexTex";
import TableInput from "../Component/TableInput";

function Settings() {
  return (
    <div>
      <div className=" sm:flex sm:justify-between text-center  bg-white w-[90%] rounded-lg  h-16 mt-10 ml-[5%] py-2 px-10">
        <h1 className="font-bold  text-2xl  text-slate-600 ">DashBoard</h1>
        <h2 className=" text-center ">
          <a className="text-blue-700  text-opacity-100" href="">
            home
          </a>{" "}
          ~ dashboard
        </h2>
      </div>
      <div className="w-[90%] border-2 bg-white h-auto py-8 px-7 rounded-lg ml-[5%] mt-10">
        <div className="  font-bold relative ">
          Information <hr className="absolute top-4 right-10 w-[82%] " />
        </div>
        <div className="relative flex justify-between">
          <p className="md:w-56 w-full text-[#8d8686] pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            praesentium illo perferendis, accusamus minima ipsam dolorem
            eligendi animi lab
          </p>
          <div className="w-[60%] h-auto top-0 right-0">
            <div className="md:flex py-6 justify-around">
              <TableInput label={"SITE TITLE"} />
              <TableInput label={"TAGLINE"} />
            </div>
            <div className="md:flex py-6 justify-around">
              <TableInput label={"EMAIL ADDRESS"} />
              <TableInput label={"WEBSITE URL"} />
            </div>

            <div className="ml-[7%]">
              <label className=" font-semibold" htmlFor="input">
                Description
              </label>
              <br />
              <textarea
                className="w-[92%] px-3 py-2 bg-[#F0F0F0] outline-none "
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
        <div className=" font-bold relative md:mt-96">
          Information <hr className=" absolute top-3 right-10 w-[82%] " />
          <p className="md:w-56 w-full font-normal text-[#8d8686] pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            praesentium illo perferendis, accusamus minima ipsam dolorem
            eligendi animi lab
          </p>
          <div className="font-normal md:absolute top-11 right-20 lg:right-56 text-[#8d8686]">
            <FlexTex flexName={"Send notification on each user registration"} />
            <FlexTex flexName={"All registration is enabled on this site"} />
            <FlexTex flexName={"You're sent a direct message"} />
            <FlexTex flexName={"New membership approval"} />
          </div>
          <button className="bg-[#3979F9] px-3 py-3 rounded-xl my-4 text-white">
            <FontAwesomeIcon icon={faCircleCheck} /> SAVE ALL CHANGES
          </button>
        </div>
      </div>
      <div className="text-[#9f9fa3] text-center py-4">
        © All Rights Reserved by ♥ Mironcoder
      </div>
    </div>
  );
}

export default Settings;
