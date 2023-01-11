import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashbtn({ btnname, dashIcon, styleIcon, FUNC }) {
  return (
    <div
      onClick={FUNC}
      className=" text-lg flex py-3 px-2 text-[gray] hover:rounded-xl ml-3 hover:bg-gray-200 cursor-pointer  "
    >
      {dashIcon} <div className="ml-3">{btnname}</div>
      <FontAwesomeIcon className={styleIcon} icon={faChevronRight} />
    </div>
  );
}

export default Dashbtn;
