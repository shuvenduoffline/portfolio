import "./App.css";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import Hireme from "./Pages/Hireme";
import Contact from "./Pages/Contact";
import Activity from "./Pages/Activity";
import DisplayMore from "./Pages/DisplayMore";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";
import WorkUnitLeft from "./Component/WorkUnitLeft";
import BloodBankImg from "./assets/blood_bank.png";
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
          technology={"ReactJS, CSS, Firebase, Twillio, NodeJS"}
          details={
            "Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore."
          }
        />
        <WorkUnit
          ImgSVG={TentCafeImg}
          project={"The Tent Cafe"}
          technology={"ReactJS, CSS, Firebase, Twillio, NodeJS"}
          details={
            "Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore."
          }
        />
        <DisplayMore />
        <Hireme />
        {/* <Activity /> */}
        <Contact />
      </ReactPageScroller>
    </div>
  );
}

export default App;
