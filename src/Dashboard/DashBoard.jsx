import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faMagnifyingGlass,
  faGlobe,
  faCartShopping,
  faBell,
  faGauge,
  faCaretDown,
  faLock,
  faTruck,
  faFileInvoice,
  faBars,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faSun } from "@fortawesome/free-regular-svg-icons";
import HomeScreen from "./Screens/HomeScreen";
import facebook from "./images/facebook.png";
import Dashbtn from "./Component/Dashbtn";
import Hotash from "./images/Hotash.png";
import Profile from "./Screens/Profile";
import Settings from "./Screens/Settings";

function DashBoard() {
  const [color, setcolor] = useState(false);
  const [pro, setpro] = useState("main");
  const [sidebar, setsidebar] = useState(false);
  return (
    <div>
      <div
        className={`h-[625px] ${sidebar && "hidden"} ${
          color ? "bg-black" : "bg-white"
        } fixed overflow-auto w-[60%] z-[3] mt-0 sm:w-64`}
      >
        <div className="flex justify-center">
          <img className="cursor-pointer" src={Hotash} alt="image" />
        </div>

        <h2 className="opacity-25 text-3xl  text-center">master</h2>
        <div>
          <Dashbtn
            styleIcon={"ml-11 mt-1"}
            FUNC={() => setpro("main")}
            dashIcon={<FontAwesomeIcon icon={faGauge} />}
            btnname={"DashBoard"}
          />
          <Dashbtn
            styleIcon={"ml-16 mt-1"}
            FUNC={() => setpro("pro2")}
            btnname={"Settings"}
            dashIcon={<FontAwesomeIcon icon={faLock} />}
          />
          <Dashbtn
            FUNC={() => {
              setpro("pro1");
            }}
            styleIcon={"ml-20 mt-1"}
            btnname={"profile"}
            dashIcon={<FontAwesomeIcon icon={faUser} />}
          />
          <Dashbtn
            styleIcon={"ml-[61px] mt-1"}
            btnname={"Product"}
            dashIcon={<FontAwesomeIcon icon={faTruck} />}
          />
          <Dashbtn
            styleIcon={"ml-[67px] mt-1"}
            btnname={"Invoices"}
            dashIcon={<FontAwesomeIcon icon={faFileInvoice} />}
          />
          <Dashbtn
            styleIcon={"ml-[78px] mt-1"}
            btnname={"Order"}
            dashIcon={<FontAwesomeIcon icon={faCartShopping} />}
          />
          <Dashbtn
            styleIcon={"ml-14 mt-1"}
            btnname={"Message"}
            dashIcon={<FontAwesomeIcon icon={faMessage} />}
          />
          <Dashbtn
            styleIcon={"ml-9 mt-1"}
            btnname={"Notification"}
            dashIcon={<FontAwesomeIcon icon={faBell} />}
          />
          <Dashbtn
            styleIcon={"ml-[70px] mt-1"}
            btnname={"Setting"}
            dashIcon={<FontAwesomeIcon icon={faGear} />}
          />
        </div>
        <FontAwesomeIcon
          onClick={() => setsidebar(true)}
          className={`top-0 absolute right-1 mt-1 cursor-pointer block md:hidden`}
          icon={faSquareXmark}
        />
      </div>
      <div className="fixed z-[2]">
        <div
          onClick={() => setsidebar(!sidebar)}
          className="w-7 h-7 ml-28 text-center sm:ml-2 md:ml-[490px] py-0.5 lg:ml-[530px] xl:ml-[355px] absolute mt-3 cursor-pointer rounded-full bg-gray-300"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div
        style={{ position: "fixed", zIndex: "1" }}
        className={`sm:w-[90%]  ml-9 w-[81%] md:w-[70%] ${
          sidebar ? "md:w-[50%]" : ""
        } bg-white xl:w-[75%] lg:w-[80%] absolute top-0 h-14 xl:ml-[336px]  sm:ml-48 md:ml-64 px-2 `}
      >
        <div className="relative xl:ml-20 py-2">
          <input
            type="search"
            placeholder="Quick finding"
            className=" rounded-2xl w-32 lg:w-64 sm:w-56 pl-7 pr-2 hidden sm:block border-2"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-2 py-2 mt-2 top-0"
          />
        </div>
        <div className="absolute flex top-2 ml-[30%] sm:ml-60 md:ml-64 xl:ml-[600px] lg:ml-96">
          <div className="flex">
            <div className="bg-gray-400 w-8 mx-2 h-8 text-center  rounded-full">
              <FontAwesomeIcon
                className="py-2 cursor-pointer"
                icon={faSun}
                onClick={() => setcolor(!color)}
              />
            </div>
            <div className="bg-gray-400 w-8 mx-2 h-8 text-center  rounded-full">
              <FontAwesomeIcon className="py-2" icon={faGlobe} />
            </div>
            <div className="bg-gray-400 w-8 mx-2 h-8 text-center  rounded-full">
              <FontAwesomeIcon className="py-2" icon={faCartShopping} />
            </div>
            <div className="bg-gray-400 w-8 mx-2 h-8 text-center hidden lg:block rounded-full">
              <FontAwesomeIcon className="py-2" icon={faMessage} />
            </div>
            <div className="bg-gray-400  mx-2 w-8 h-8 text-center hidden lg:block rounded-full">
              <FontAwesomeIcon className="py-2" icon={faBell} />
            </div>
          </div>

          <img
            src={facebook}
            alt=""
            className="w-9 mr-1 sm:w-10 sm:mx-2 sm:h-10 rounded-full h-9"
          />
          <div className="font-bold hidden lg:block absolute  lg:-right-16 md:-right-16 xl:-right-16 ">
            Hamza <FontAwesomeIcon icon={faCaretDown} />
            <div className="font-light">@hamza</div>
          </div>
        </div>
      </div>

      <div
        className={`${
          sidebar
            ? "sm:w-[100%] w-[80%]"
            : " sm:w-[60%] xl:w-[80%] lg:w-[75%] md:w-[70%]"
        } h-auto] ${
          color && "bg-blue-900"
        } bg-[#F8F8F8] absolute top-14 sm:right-0 right-[40px] transition-all`}
      >
        {pro == "main" && <HomeScreen />}
      </div>

      <div
        className={`
           h-auto] ${color && "bg-blue-900"} absolute top-14 ${
          sidebar ? "w-[100%]" : "w-[80%]"
        } right-0 transition-all`}
      >
        <div className={`${sidebar ? "ml-[35%]" : "ml-[30%]"}`}>
          {pro == "pro1" && <Profile />}
        </div>
      </div>

      <div
        className={`
           h-auto] ${color && "bg-blue-900"} bg-[#F8F8F8] absolute top-14 ${
          sidebar ? "w-[100%]" : "w-[80%]"
        } right-0 transition-all`}
      >
        {pro == "pro2" && <Settings />}
      </div>
    </div>
  );
}

export default DashBoard;
