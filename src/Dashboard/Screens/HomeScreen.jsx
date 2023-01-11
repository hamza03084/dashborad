import {
  faArrowTrendUp,
  faBagShopping,
  faCartShopping,
  faCircleUser,
  faEllipsis,
  faEllipsisH,
  faEllipsisVertical,
  faEyeSlash,
  faPen,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Color from "../Component/Color";
import TableComp from "../Component/TableComp";

import { array1 } from "../DummyData";
console.log(array1);

function HomeScreen() {
  return (
    <div>
      <div className="  sm:flex sm:justify-between text-center w-[90%] rounded-lg  h-16 mt-10 ml-[5%] py-2 px-10">
        <h1 className="font-bold  text-2xl  text-slate-600 ">DashBoard</h1>
        <h2 className=" text-center ">
          <a className="text-blue-700  text-opacity-100" href="">
            home
          </a>{" "}
          ~ dashboard
        </h2>
      </div>

      <div className=" py-3 h-auto md:w-[65%] sm:flex sm:justify-evenly  border-black">
        <Color
          totalNumber={265}
          topIconbg={" bg-[#467f54]"}
          backGroundColor={" from-[#1DA256] to-[#adeac5]"}
          numberColor={" bg-[#187D44]"}
          iconName={<FontAwesomeIcon icon={faCircleUser} />}
          iconName2={
            <FontAwesomeIcon
              className="right-6 cursor-pointer top-32 text-[#367f54] absolute"
              icon={faEllipsisVertical}
            />
          }
        />
        <Color
          totalNumber={253}
          topIconbg={" bg-[#d077e0]"}
          backGroundColor={"from-[#C012E2] to-[#ebcbf1]"}
          numberColor={"bg-[#9506b1]"}
          iconName2={
            <FontAwesomeIcon
              className="right-6 cursor-pointer top-32 text-[#9506b1] absolute"
              icon={faEllipsisVertical}
            />
          }
          iconName={<FontAwesomeIcon icon={faCartShopping} />}
        />
      </div>
      <div className=" my-1 h-auto md:w-[65%]  sm:flex sm:justify-evenly ">
        <Color
          totalNumber={573}
          topIconbg={"bg-[#2d86df]"}
          numberColor={"bg-[#076ed5]"}
          backGroundColor={"from-[#2d86df] to-[#bacee1]"}
          iconName={<FontAwesomeIcon icon={faBagShopping} />}
          iconName2={
            <FontAwesomeIcon
              className="right-6 cursor-pointer top-32 text-[#076ed5] absolute"
              icon={faEllipsisVertical}
            />
          }
        />
        <Color
          totalNumber={232}
          iconName={<FontAwesomeIcon icon={faStar} />}
          topIconbg={"bg-[#fca709]"}
          numberColor={"bg-[#9c6809]"}
          backGroundColor={"from-[#E39B12] to-[#f0d094]"}
          iconName2={
            <FontAwesomeIcon
              className="right-6 cursor-pointer top-32 text-[#9c6809] absolute"
              icon={faEllipsisVertical}
            />
          }
        />
      </div>

      <div className="h-[352px] bg-[#0B59F1] w-[100%] md:absolute md:top-[125px] right-0 rounded-lg md:w-[35%]">
        <div className="text-white text-lg font-semibold px-[7%] py-[6%]">
          Total Sales
        </div>
        <FontAwesomeIcon
          className="text-white absolute top-0 right-10 py-[7%]"
          icon={faEllipsisH}
        />
        <h1 className="text-white text-xl font-semibold relative pl-[8%]">
          $3,787,681.00
          <h2 className="top-0 text-lg md:right-28 md:top-7 flex ml-40 xl:left-[20%] xl:top-2 absolute">
            40.63% <FontAwesomeIcon icon={faArrowTrendUp} />
          </h2>
        </h1>
      </div>

      <div className="w-[100%] h-auto px-2 bg-white relative ">
        <div className="font-semibold">Best Selling Products</div>
        <FontAwesomeIcon
          className="absolute top-0 px-3 pt-2 right-0"
          icon={faEllipsis}
        />

        <div className="flex justify-between flex-col sm:flex-row">
          <TableComp />
          <TableComp label="CATEGORY BY" />
          <TableComp label="BRAND BY" />
          <div className="basis-1/5">
            <label className="font-semibold">SEARCH BY</label>
            <br />
            <input
              type="search"
              className="cursor-pointer w-full px-2 outline-none rounded-lg bg-gray-300 h-12 "
              placeholder="id / name /category /brand"
            />
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="mt-4 w-[100%] z-[9] ">
            <thead className="bg-blue-700 h-12 font-light text-white">
              <tr>
                <th>
                  <input type="checkbox" /> UID
                </th>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>RATING</th>
                <th>ORDER</th>
                <th>SALES</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {array1.map((e, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" /> {e.td1}
                  </td>
                  <td>
                    {e.imgtd2}
                    {e.td2}
                  </td>
                  <td>{e.td3}</td>
                  <td>{e.td4}</td>
                  <td className="text-[red]">{e.td5} </td>
                  <td>{e.td6}</td>
                  <td>{e.td7}</td>
                  <td>{e.td8}</td>
                  <td>{e.td9}</td>
                  <td>
                    <div className="flex justify-center">
                      <div className="w-6 h-6 mx-2  bg-[#FBE5FF] text-[#BE0EE1]">
                        <FontAwesomeIcon
                          className="w-4 h-4 px-1 cursor-pointer"
                          icon={faEyeSlash}
                        />
                      </div>
                      <div className="w-6 h-6 mx-2 bg-[#DDFBE9] text-[#1A9F53]">
                        <FontAwesomeIcon
                          className="w-4 h-4 cursor-pointer px-1"
                          icon={faPen}
                        />
                      </div>
                      <div className="w-6 h-6 mx-2 bg-[#F8F8F8] text-[#F11133]">
                        <FontAwesomeIcon
                          className="w-4 h-4 px-1 cursor-pointer"
                          icon={faTrash}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
