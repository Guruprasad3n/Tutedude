import "./smallComponent.css";
import Bookmark from "../../../Assets/Bookmark.png";
import Contact from "../../../Assets/Contact.png";
import Discount from "../../../Assets/Discount.png";
import Rupee from "../../../Assets/Rupee.png";
import Wallet from "../../../Assets/Wallet.png";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: Contact,
    darkBlack: "Invite your Friends",
    grey: "Share the link tutedude.com with your friends",
  },
  {
    id: 2,
    image: Bookmark,
    darkBlack: "Friend purchases any course",
    grey: "Using your REFERRAL CODE in the payments page",
  },
  {
    id: 3,
    image: Rupee,
    darkBlack: "You get ₹ 200 as referral money",
    grey: "On total purchase the friend makes, into your wallet",
  },
  {
    id: 4,
    image: Discount,
    darkBlack: "Your Friend gets ₹ 200 Off ",
    grey: "On his overall fee on successful purchase using your referral code ",
  },
  {
    id: 5,
    image: Wallet,
    darkBlack: "Transfer money from wallet",
    grey: "When the wallet balance reaches ₹200 or more, you can withdraw it",
  },
  //   {
  //     id: 6,
  //     image: Bookmark,
  //     darkBlack: "Invite your Friends",
  //     grey: "Share the link tutedude.com with your friends",
  //   },
];

function SmallComponent() {
  // const [getData, setGetData] = useState(data)
  // console.log(getData)
  console.log(data);
  return (
    <>
      <div className="mapMain">
        {data.map((e) => (
          <div className="doesIt" key={e.id}>
            <div className="circel">
              <img src={e.image} alt="Contact" />
            </div>
            <div className="persona">
              {/* Invite your Friends */}
              <p>{e.darkBlack}</p>
              {/* Share the link tutedude.com with your friends */}
              <p>{e.grey}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SmallComponent;
