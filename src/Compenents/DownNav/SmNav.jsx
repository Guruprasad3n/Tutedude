import { useLocation } from "react-router-dom";
import "./downNav.css";
// import {MdOutlineKeyboardArrowRight} from "react-icons/Md"
import { MdKeyboardArrowRight } from "react-icons/md";
function DownNav() {
const location = useLocation()
console.log(location)

  return (
    <>
      <div className="navigation">
        <p style={{ display: "flex", alignItems: "center" }}>
          UI/UX <MdKeyboardArrowRight style={{ fontSize: "14px" }} /> Refer &
          Earn
        </p>
      </div>
    </>
  );
}
export default DownNav;
