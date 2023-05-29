import FreindsEnrollComp from "./FriendsComponents/FriendsEnrollComp";
import ReferralCode from "./FriendsComponents/ReferralCode";
import WalletBalance from "./FriendsComponents/WalletBalance";
import "./friendsEnroll.css";
function FriendsEnroll() {
  return (
    <>
      <div className="friends">
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
