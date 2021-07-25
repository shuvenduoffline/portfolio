import React from "react";
import Logo from "../assets/logo.svg";
import HiSVG from "../assets/hello.svg";
import ComputerSVG from "../assets/computer.svg";
import DownSVG from "../assets/downarrow.svg";
import { makeStyles } from "@material-ui/core/styles";
// import SkillBar from 'react-skillbars';
import SkillBar from "../Component/SkillBar";
import TagCloud, { renderData } from "d3-tagcloud-for-react";

const colorarray = [
  "#8c5fc4",
  "#61b8ff",
  "#f7d286",
  "#e86971",
  "#76bb7f",
  "#5bbeca",
];

const data = [
  {
    label: "React.js",
    fontSize: 10,
    opacity: 8,
    color: "blue",
  },
  {
    label: "Spring Boot",
    fontSize: 9,
    opacity: 9,
  },
  {
    label: "ECMAScript 6",
    fontSize: 4,
    opacity: 7,
  },
  {
    label: "Nginx",
    fontSize: 4,
    opacity: 4,
  },
  {
    label: "Redux",
    fontSize: 4,
    opacity: 7,
  },
  {
    label: "Atlaskit",
    fontSize: 9,
    opacity: 9,
  },
  {
    label: "Google Cloud",
    fontSize: 9,
    opacity: 6,
  },
  {
    label: "JavaScript",
    fontSize: 9,
    opacity: 8,
  },
  {
    label: "Twilio",
    fontSize: 9,
    opacity: 9,
  },
  {
    label: "MongoDB",
    fontSize: 8,
    opacity: 3,
  },
  {
    label: "MySQL",
    fontSize: 8,
    opacity: 4,
  },
  {
    label: "IOT",
    fontSize: 9,
    opacity: 8,
  },
  {
    label: "Github",
    fontSize: 6,
    opacity: 5,
  },
  {
    label: "AWS",
    fontSize: 6,
    opacity: 6,
  },
  {
    label: "Node.js",
    fontSize: 4,
    opacity: 4,
  },
  {
    label: "React Native",
    fontSize: 8,
    opacity: 5,
  },
  {
    label: "Android",
    fontSize: 9,
    opacity: 8,
  },
  {
    label: "C++",
    fontSize: 4,
    opacity: 6,
  },
  {
    label: "Python",
    fontSize: 4,
    opacity: 5,
  },
  {
    label: "Service Discovery",
    fontSize: 4,
    opacity: 6,
  },
  {
    label: "Rabbit MQ",
    fontSize: 1,
    opacity: 4,
  },
];

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#000000",
  },
  heading: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 1000,
    fontSize: 35,
    margin: 0,
    paddingTop: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 5,
  },
  left: {
    marginLeft: 100,
    marginRight: 20,
    flex: 3,
  },
  right: {
    flex: 2,
    textAlign: "left",
    fontFamily: "Poppins",
    color: "white",
    marginRight: 100,
  },
  skillBar: {
    width: "90%",
    marginRight: 50,
    marginTop: -10,
    height: 4,
    background: "#FF4900",
    borderRadius: 5,
    border: "2px solid #707070",
  },
});

const randomColor = (colorarray) => {
  if (colorarray) {
    return colorarray[Math.floor(Math.random() * colorarray.length)];
  } else {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }
};
const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="skills">
      {/* <SkillBar skills={skills} height={20}/> */}
      <h2 className={classes.heading}>Skills</h2>

      <div className={classes.container}>
        <div className={classes.left}>
          <TagCloud
            className="tag-cloud"
            // rotate={() => Math.round(Math.random() * 180)}
            spiral={1}
            style={{
              fontFamily: "Poppins",
              fontSize: () => Math.round(Math.random() * 50) + 16,
              //   fontSize: 30,
              color: () => randomColor(colorarray),
              padding: 5,
              width: "100%",
              height: "600px",
            }}
            data={data}
            colorarray={colorarray}
          >
            {renderData(data)}
            {/* <div
              style={{
                fontSize: 30,
                fontWeight: "bold",
                opacity: 0.9,
                padding: 12,
                color: "black",
                fontFamily: "Poppins",
              }}
            >
              Black
            </div> */}
          </TagCloud>
        </div>
        <div className={classes.right}>
          <h2>Read About My Life Struggle Story!</h2>
          <p>
            Since my college days, I have been taking projects, designing and
            building them with different technologies. Done internships from
            Startup, currently working in the software architect. I regularly
            build things to practice and explore new technology skills.
          </p>
          <h5>Java</h5>
          <SkillBar color="#FF4900" success={95} />
          <h5>Spring Boot</h5>
          <SkillBar color="#FF4900" success={80} />
          <h5>JavaScript</h5>
          <SkillBar color="#FF4900" success={90} />
          <h5>React JS</h5>
          <SkillBar color="#FF4900" success={70} />
          <h5>Node JS</h5>
          <SkillBar color="#FF4900" success={75} />
          <h5>Python</h5>
          <SkillBar color="#FF4900" success={65} />
          <h5>C++</h5>
          <SkillBar color="#FF4900" success={75} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
