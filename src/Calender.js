import React, { useState } from "react";
// import setting from "../images/setting.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";

function Calender() {
  let customerInfo = [
    {
      id: 1,
      name: "Customer 1",
      totalShifts: 4,
      unfulfiledShifts: 1,
      filledHours: 10,
    },
    {
      id: 2,
      name: "Customer 2",
      totalShifts: 12,
      unfulfiledShifts: 21,
      filledHours: 8,
    },
  ];

  const [color, setcolor] = useState("b1");
  const [activeCustomer, setActiveCustomer] = useState(customerInfo[0]);
  console.log(activeCustomer);

  return (
    <div className="w-[1152px] absolute right-3 shadow-[ 0px 4px 11px 1px ] shadow-[rgba(42, 45, 67, 0.23)] h-80 bg-[#FFFFFF] flex justify-between px-[5%] pt-[2%] rounded-3xl border-2 font-bold">
      <div>
        <select className="w-[168px] h-14 border-2 px-2 text-xs rounded-xl">
          <option value="html">
            html <br />
            <div className="font-extralight">0 shifts Unpublished</div>
          </option>
          <option value="css">css</option>
          <option value="java">java</option>
        </select>

        <div className="w-[168px] relative font-normal">
          <h1 className="pt-2.5 text-xs">Select Customer</h1>
          <img
            // src={setting}
            onClick={() => alert("clicked")}
            className="absolute top-4 cursor-pointer right-1"
            alt="dswd"
          />
        </div>

        <select
          value={activeCustomer.id}
          onChange={(e) => {
            const c = customerInfo.find(
              (res) => res.id === parseInt(e.target.value)
            );
            console.log(e.target.value);
            setActiveCustomer(c);
          }}
          className="w-[168px] h-8 border-2 mt-1 text-[10px]  rounded-xl"
        >
          {customerInfo.map((e) => (
            <option value={e.id}>{e.name}</option>
          ))}
        </select>

        <h1 className="font-normal pb-1 text-xs pt-3">Schedule by:</h1>
        <div>
          <button
            onClick={() => setcolor("b1")}
            className={`text-xs font-bold ${
              color === "b1" && " bg-[#F2385F] border-none text-white"
            } px-2.5  border-2 rounded-lg py-2`}
          >
            Employee
          </button>
          <button
            onClick={() => setcolor("b2")}
            className={`text-xs font-bold ${
              color === "b2" && " bg-[#F2385F] border-none text-white"
            } px-6 ml-3 border-2 rounded-lg py-2`}
          >
            Sites
          </button>
        </div>
      </div>

      <div className="flex text-xs">
        <div className="bg-[#F2385F] w-fit h-fit px-1.5 py-1 text-xs rounded-md text-white">
          Tuesday
        </div>
        <FontAwesomeIcon
          className="text-[#F2385F] cursor-pointer h-6 w-10"
          icon={faSquareCaretLeft}
        />

        <div className="bg-[#F2385F] h-fit rounded-md px-2 py-1 text-white">
          01 Jun-30
        </div>
        <FontAwesomeIcon
          className="text-[#F2385F] cursor-pointer h-6 w-10"
          icon={faSquareCaretRight}
        />
      </div>

      <div>
        <div className="w-[168px] border-2 px-3 py-3 rounded-t-lg text-xs font-bold">
          Weekly report
        </div>
        <div className="w-[168px] flex justify-between border-t-0 border-2 px-3 py-3 text-[10px] font-normal">
          Total Shifts
          <div>{activeCustomer.totalShifts}</div>
        </div>
        <div className="w-[168px] flex justify-between border-t-0 border-2 px-3 py-3 text-[10px] font-normal">
          Unfillied shift
          <div>{activeCustomer.unfulfiledShifts}</div>
        </div>
        <div className="w-[168px] flex justify-between border-t-0 border-2 px-3 py-3 text-[10px] font-normal">
          Filled hours
          <div>{activeCustomer.filledHours}</div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
