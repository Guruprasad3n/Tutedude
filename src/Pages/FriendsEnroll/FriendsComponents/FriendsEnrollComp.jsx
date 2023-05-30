import UserCard from "./UserCard";
import "./friendsEnrollComp.css";

function FreindsEnrollComp() {
  return (
    <>
      <div className="FreindsEnrollCompMain">
        <p className="fCompHead">
          Friends who enrolled
          <span style={{ color: "#626262", fontWeight: "normal" }}>(3)</span>
        </p>

        <UserCard />
      </div>
    </>
  );
}
export default FreindsEnrollComp;
