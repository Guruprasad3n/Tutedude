import SkillCard from "./SkillCard";
import "./userCard.css";

const userData = [
  {
    id: 1,
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    course: "Courses Enrolled(6)",
    skills: [
      { skill1: "UI/UX" },
      { skill2: "Photoshop" },
      { skill3: "Illustrator" },
      { skill4: "Python" },
      { skill5: "MERN" },
      { skill6: "Java" },
    ],
    amount: "Referral Amount ",
    price: "₹185",
  },
  {
    id: 2,
    name: "Subhash Mishra",
    date: "15 Sep, 2022",
    course: "Courses Enrolled(23)",
    skills: [
      { skill1: "UI/UX" },
      { skill2: "Photoshop" },
      { skill3: "Illustrator" },
      { skill4: "Python" },
      { skill5: "MERN" },
      { skill6: "Java" },
      { skill7: "C++" },
    ],
    amount: "Referral Amount ",
    price: "₹485",
  },
  {
    id: 3,
    name: "Prafull Kumar",
    date: "16 Sep, 2022",
    course: "Courses Enrolled(23)",
    skills: [
      { skill1: "UI/UX" },
      { skill2: "Photoshop" },
      { skill3: "Illustrator" },
      { skill4: "Python" },
      { skill5: "MERN" },
      { skill6: "Java" },
    ],
    amount: "Referral Amount ",
    price: "₹485",
  },
];

function UserCard() {
  return (
    <>
      <div className="mainCardCard">
        {userData.map((e) => (
          <div className="userCardMain">
            <div className="headingPart">
              <p>{e.name}</p>
              <p>{e.date}</p>
            </div>
            <p className="enCOurse">{e.course}</p>

            <div className="skillGrid">
              {/* <div className="smallSkill">{e.skills.skill1}</div>
              <div className="smallSkill"></div>
              <div className="smallSkill"></div>
              <div className="smallSkill"></div>
              <div className="smallSkill"></div>
              <div className="smallSkill"></div> */}
              {/* <SkillCard/> */}

            </div>
            <div className="amPrice">

                <p>{e.amount}</p>
                <p>{e.price}</p>
            </div>
          </div>
        ))}
      </div>
        <p className="terms">Terms & Conditions</p>
    </>
  );
}
export default UserCard;

