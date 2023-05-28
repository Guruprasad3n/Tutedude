import logo from "../../Assets/Logo.png";
import profile from "../../Assets/LoginProfile.png";
import arrow from "../../Assets/LoginArrow.png";
import "./nav.css"
function Nav() {
  return (
    <>
      <div className="navbar1">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="righr">
          <div className="righr1">
            <p>My Assignment</p>
          
            <p>Chat with Mentor</p>
          </div>
          <div className="prim">
            <img src={profile} alt="Profile" />
            <p>ProfileName</p>
            <img src={arrow} alt="Down Arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
