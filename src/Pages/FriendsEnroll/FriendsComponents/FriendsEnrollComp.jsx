import "./friendsEnrollComp.css";

const userData = [
  {
    id: 1,
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    course: "Courses Enrolled(6)",
    skills: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: "Referral Amount ",
    price: "₹185",
  },
  {
    id: 2,
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    course: "Courses Enrolled(6)",
    skills: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: "Referral Amount ",
    price: "₹185",
  },
  {
    id: 3,
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    course: "Courses Enrolled(6)",
    skills: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: "Referral Amount ",
    price: "₹185",
  },
];

function FreindsEnrollComp() {
  return (
    <>
      <div className="FreindsEnrollCompMain">
        <p className="fCompHead">
          Friends who enrolled
          <span style={{ color: "#626262", fontWeight: "normal" }}>(3)</span>
        </p>


<div className="userCard">

</div>


      </div>
    </>
  );
}
export default FreindsEnrollComp;
