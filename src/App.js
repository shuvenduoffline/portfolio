import { useState } from "react";
import ReactGA from "react-ga";
import ReactPageScroller from "react-page-scroller";
import Austec from "./assets/austec.png";
import BloodBankImg from "./assets/blood_bank.png";
import WaterIOTImg from "./assets/iotwater.png";

import WorkUnit from "./Component/WorkUnit";
import WorkUnitLeft from "./Component/WorkUnitLeft";

import Contact from "./Pages/Contact";
import DisplayMore from "./Pages/DisplayMore";
import EducationAndAward from "./Pages/EducationAndAward";
import Hireme from "./Pages/Hireme";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";

import "./App.css";

ReactGA.initialize("G-LX949WZLD7");

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    ReactGA.pageview(
      window.location.pathname + window.location.search + number
    );
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
          project={"Blood Bank (Web3)"}
          technology={"ReactJS, Solidity, Ethereum, Block Chain"}
          details={
            "New Generations Blood Bank powered by decentralize blockchain solution. Build on Ethereum Network. Blood Collection to Blood Verification, Distribution is all done with a fully decentralized system."
          }
          link={"https://shuvenduoffline.github.io/bloodbank/"}
        />
        <WorkUnit
          ImgSVG={Austec}
          project={"Austec Services (iOS & WebApp)"}
          technology={
            "ReactJS, Node JS, AWS, React Native, TypeScript, iOS App"
          }
          details={
            "Designed and developed an application to effectively assigning guards to their duty, and keep track of their works and their performances. Build web app and hybrid mobile application to keep tracking of everything and login into the shifts."
          }
          link={"https://roster.austecservices.com.au/"}
        />
        <WorkUnitLeft
          ImgSVG={WaterIOTImg}
          project={"Water Distribution (IoT)"}
          technology={"NextJs, NodeJs, AWS, MicroServices"}
          details={
            "Iot based highly scalable water distribution solution to reduce water wastage and ensure a minimum of 5L water daily with proper pressure. Architect, Build, Integrate SMS and automated calling with Servetel, AWS, NodeJS utilizing microservices approach."
          }
          link={"https://waterdist.iot.demo.passionatesolver.com/login"}
        />
        <DisplayMore />
        <Hireme handlePageChange={handlePageChange} />
        {/* <Activity /> */}
        <EducationAndAward />
        <Contact handlePageChange={handlePageChange} />
      </ReactPageScroller>
    </div>
  );
}

export default App;
