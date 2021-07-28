import "./App.css";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import Hireme from "./Pages/Hireme";
import Contact from "./Pages/Contact";
import Activity from "./Pages/Activity";
import EducationAndAward from "./Pages/EducationAndAward";
import DisplayMore from "./Pages/DisplayMore";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";
import WorkUnitLeft from "./Component/WorkUnitLeft";
import BloodBankImg from "./assets/blood_bank.png";
import Austec from "./assets/austec.png";
import TentCafeImg from "./assets/tent_cafe.PNG";
import WorkUnit from "./Component/WorkUnit";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  return (
    <div className="App">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Home handlePageChange={handlePageChange} />
        <Skills />
        <Works />
        <WorkUnitLeft
          ImgSVG={BloodBankImg}
          project={"Blood Bank"}
          technology={"ReactJS, Solidity, Ethereum, Block Chain"}
          details={
            "New Generations Blood Bank powered by decentralize blockchain solution. Build on Ethereum Network. Blood Collection to Blood Verification, Distribution is all done with a fully decentralized system."
          }
        />
        <WorkUnit
          ImgSVG={Austec}
          project={"Austec Services"}
          technology={
            "ReactJS, Node JS, AWS, React Native, TypeScript, iOS App"
          }
          details={
            "Designed and developed an application to effectively assigning guards to their duty, and keep track of their works and their performances. Build web app and hybrid mobile application to keep tracking of everything and login into the shifts."
          }
        />
        <DisplayMore />
        <Hireme handlePageChange={handlePageChange} />
        {/* <Activity /> */}
        <EducationAndAward />
        <Contact />
      </ReactPageScroller>
    </div>
  );
}

export default App;
