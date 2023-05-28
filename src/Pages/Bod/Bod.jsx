import "./bod.css";
function Bod() {
  return (
    <>
      <div className="bod">
        <div className="dashboard" style={{ background: "" }}>
          <div className="dashboard1">
            <div className="referMain">
              <div className="referMainChild">
                <p className="">Referral Earning</p>
                <p className="">₹ 2,500</p>
              </div>
              <div className="referMainChild">
                <p className="">Total Referrals</p>
                <p className="earning">7</p>
              </div>
              <div className="referMainChild">
                <p className="">Wallet Balance</p>
                <p className="">₹ 500</p>
              </div>
            </div>
            <div className="dblock">
              <button>Withdraw Balance</button>
            </div>
          </div>
          <div className="dadhboard2">
            <p className="heading">Your Referral Code</p>
            <div className="frame">
              <span>E</span>
              <span>D</span>
              <span>C</span>
              <span>H</span>
              <span>5</span>
              <span>4</span>
            </div>
          </div>
        </div>
        {/* -----How Does it Works----- */}

        <div className="howDoesItWork" style={{ background: "" }}>
        <p className="heading" >How does it work ?</p>
        </div>
        {/* -----Terms and Conditions and Friends----- */}
        <div className="terms" style={{ background: "green" }}>
          erte
        </div>
      </div>
    </>
  );
}
export default Bod;
