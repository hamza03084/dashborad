function Color({
  iconName,
  iconName2,
  backGroundColor,
  numberColor,
  topIconbg,
  totalNumber,
}) {
  return (
    <div
      className={`h-40 sm:w-[45%]  w-[100%] my-2 bg-gradient-to-r relative  ${backGroundColor}  rounded-lg border-black`}
    >
      <h1 className="text-white text-xl font-semibold px-3 py-2">
        Total User <br />
        {totalNumber}
      </h1>
      <div
        className={`text-white ${numberColor} w-fit px-1 mt-10 ml-2 rounded-md`}
      >
        + 95%
      </div>{" "}
      <div className="text-white ml-16 mb-7 top-28 absolute ">Last Month</div>
      <div
        className={`w-fit top-2 py-1.5 px-2 text-white right-0 rounded-md ${topIconbg} mr-5  absolute`}
      >
        {iconName}
      </div>
      {iconName2}
    </div>
  );
}

export default Color;
