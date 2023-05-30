import { Link } from "react-router-dom";
import FreindsEnrollComp from "./FriendsComponents/FriendsEnrollComp";
import ReferralCode from "./FriendsComponents/ReferralCode";
import WalletBalance from "./FriendsComponents/WalletBalance";
import "./friendsEnroll.css";
import {HiOutlineArrowLeft} from "react-icons/hi"
function FriendsEnroll() {
  return (
    <>
      <div className="friends">
         <div className="goback">
         <HiOutlineArrowLeft/> <Link to={"/"} >go back</Link>
         </div>
        <div className="referWallet">
            <ReferralCode/>
            <WalletBalance/>
        </div>
        <FreindsEnrollComp/>
      </div>
    </>
  );
}
export default FriendsEnroll;

// style={{ background: "", height: "", color: "" }}
