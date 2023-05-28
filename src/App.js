import { Route, Routes } from "react-router-dom";
import "./App.css";
import DownNav from "./Compenents/DownNav/SmNav";
import Navbar from "./Compenents/Navbar/Navbar";
import Body from "./Compenents/Body/Body";
import Nav from "./Pages/Nav/nav";
import Nav1 from "./Pages/DownNav1/Nav1";
import Bod from "./Pages/Bod/Bod";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <DownNav />
      <Body/> 
      */}
      <Nav />
      <Nav1/>
      <Bod/>
    </div>
  );
}

export default App;
