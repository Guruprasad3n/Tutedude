import { Link, useLocation } from "react-router-dom";
import "./nav1.css";
import { MdKeyboardArrowRight } from "react-icons/md";
function Nav1() {
  const location = useLocation();
  console.log(location);
  let currentLink = " ";
  // UI/UX > Refer & Earn > Friends Referred 
  const crumb = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`>${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={currentLink}
          >
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <>
      <div className="dow">
        <p style={{ display: "flex", alignItems: "center" }}>
          UI/UX <MdKeyboardArrowRight style={{ fontSize: "14px" }} /> Refer &
          Earn <MdKeyboardArrowRight style={{ fontSize: "14px" }} /> {crumb}
        </p>
      </div>
    </>
  );
}
export default Nav1;
