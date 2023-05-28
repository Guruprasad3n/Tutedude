import { Route, Routes } from "react-router-dom";
import "./App.css";
import DownNav from "./Compenents/DownNav/SmNav";
import Navbar from "./Compenents/Navbar/Navbar";
import Body from "./Compenents/Body/Body";
import Nav from "./Pages/Nav/nav";
import Nav1 from "./Pages/DownNav1/Nav1";
import Bod from "./Pages/Bod/Bod";
import FriendsEnroll from "./Pages/FriendsEnroll/FriendsEnroll";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <DownNav />
      <Body/> 
      */}

      <Nav />
      <Nav1 />

      <Routes>
        <Route path="/" element={<Bod />} />
        <Route path="/FriendsReferred" element={<FriendsEnroll />} />
      </Routes>
    </div>
  );
}

export default App;
