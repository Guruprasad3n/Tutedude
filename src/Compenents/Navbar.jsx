import NavLogo from "../Assets/Logo.png";
import profile from "../Assets/LoginProfile.png";
import arrow from "../Assets/LoginArrow.png";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={NavLogo} alt="Logo" />
        <div className="rightNavbar">
          <p>My Assignment</p>
          <p>Chat with Mentor</p>
          <div className="profileBar">
            <img src={profile} alt="Profile" />
            <p>ProfileName</p>
            <img src={arrow} alt="Arrow Dropdown" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
