import "./body.css";
function Body() {
  return (
    <>
      <div>
        <div className="earningBody">
          <div className="parent">
        <div className="body">
          <div className="ref__earning">
            <p className="referral">Referral Earning</p>
            <p className="earning">₹ 2,500</p>
          </div>
          <div className="ref__earning">
            <p className="referral">Total Referrals</p>
            <p className="earning">7</p>
          </div>
          <div className="ref__earning">
            <p className="referral">Wallet Balance</p>
            <p className="earning">₹ 500</p>
          </div>
          <div className="button__Withdrawl">
            <button>Withdraw Balance</button>
          </div>
        </div>
        <div>
          <p>Your Referral Code </p>
          <div>EDCH54</div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}
export default Body;
