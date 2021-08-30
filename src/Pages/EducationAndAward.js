import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import Typical from "react-typical";
import Achivment from "../assets/achivment.svg";
import Caluniv from "../assets/Calcutta_University_Logo.svg";
import graduation from "../assets/graduation.svg";
import KKI from "../assets/kki.png";
import Language from "../assets/language.svg";
import RightArrow from "../assets/right_arrow.svg";

const useStyles = makeStyles({
  root: {
    height: "100%",
    paddingTop: 20,
    background: "#000000",
    display: "flex",
    flexDirection: "row",
    flex: 2,
    paddingLeft: 100,
    paddingRight: 100,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  educationLogo: {
    height: 44,
    width: 44,
    marginTop: 4,
  },
  eduHigh: {
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 10,
  },
  highLight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  collegeDIV: {
    color: "white",
    textAlign: "left",
    fontFamily: "Poppins",
    width: 300,
    marginTop: 5,
    cursor: "pointer",
    "&:hover, &$focusVisible": {
      "& $mrzo": { scale: 1.01 },
    },
  },
  mrzo: {
    margin: 0,
    transition: "all 0.3s ease",
  },
  year: {
    marginTop: 5,
  },
  timeLineDiv: {
    display: "flex",
  },
  achevementBox: {
    paddingLeft: 20,
  },
  achevement: {
    color: "white",
    textAlign: "left",
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
    "&:hover, &$focusVisible": {
      "& $achivtxt": {
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
        "text-shadow": "none",
        "-webkit-text-fill-color": "transparent",
        "-webkit-background-clip": "text",
        "-webkit-box-decoration-break": "clone",
        "background-clip": "text",
        "border-color": "white",
      },
      "& $arrow": {
        paddingLeft: 10,
        filter:
          "invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  arrow: {
    width: 10,
    height: 10,
    paddingRight: 20,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  achivtxt: {
    transition: "all 0.3s ease",
    margin: 0,
    cursor: "pointer",
    maxWidth: 400,
  },
  languageTxtSub: {
    fontFamily: "Poppins",
    color: "white",
    textAlign: "left",
  },
  intro: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 500,
    fontSize: 40,
    marginBottom: 30,
    textAlign: "left",
    marginTop: 25,
    height: 80,
  },
});

const openCopyRight = () =>
  window.open(
    "https://raw.githubusercontent.com/shuvenduoffline/shuvenduoffline/master/Block_Chain_Based_DocumentSharing_Framework_Copyright.pdf",
    "_blank"
  );

const EducationAndAward = () => {
  const classes = useStyles();

  const TypingAnimation = React.memo(() => {
    return (
      <Typical
        loop={Infinity}
        className={classes.intro}
        wrapper="p"
        steps={[
          "I'm pretty fluent in English.",
          3000,
          "বাংলা আমার মাতৃভাষা।",
          3000,
          "Bengali is my mother language.",
          3000,
          `मैं हिंदी में बात कर सकता हूं। `,
          3000,
          `I speak Hindi fluently. `,
          3000,
        ]}
      />
    );
  }, [classes]);

  return (
    <div className={classes.root} id="education">
      <div className={classes.left}>
        <div className={classes.highLight}>
          <img src={graduation} className={classes.educationLogo} />
          <h2 className={classes.eduHigh}>EDUCATION</h2>
        </div>
        <div className={classes.timeLineDiv}>
          <Timeline style={{ position: "absolute" }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className={classes.collegeDIV}>
                  <img src={Caluniv} className={classes.educationLogo} />
                  <h5 className={classes.mrzo}>UNIVERSITY OF CALCUTTA</h5>
                  <h6 className={classes.mrzo}>
                    B.Tech in Information Technology
                  </h6>
                  <h6 className={classes.mrzo}>8.97 CGPA, First Class First</h6>
                  <p className={classes.year}>(2016-2020)</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className={classes.collegeDIV}>
                  <img src={KKI} className={classes.educationLogo} />
                  <h5 className={classes.mrzo}>
                    JHARGRAM KUMUD KUMARI INSTITUTION
                  </h5>
                  <h6 className={classes.mrzo}>Higher Secondary in Science</h6>
                  <h6 className={classes.mrzo}>83%</h6>
                  <p className={classes.year}>(2014-2016)</p>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className={classes.collegeDIV}>
                  <img src={KKI} className={classes.educationLogo} />
                  <h5 className={classes.mrzo}>CHARKABONI HIGH SCHOOL</h5>
                  <h6 className={classes.mrzo}>
                    Higher Secondary with First Class First
                  </h6>
                  <p className={classes.year}>(~-2014)</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.highLight}>
          <img src={Achivment} className={classes.educationLogo} />
          <h2 className={classes.eduHigh}>ACHIEVEMENT</h2>
        </div>
        <div className={classes.achevementBox}>
          <div className={classes.achevement} onClick={() => openCopyRight()}>
            <div style={{ width: 40 }}>
              <img src={RightArrow} className={classes.arrow} />
            </div>
            <div>
              <h5 className={classes.achivtxt}>Copyright Claim</h5>
              <h6 className={classes.achivtxt}>
                Copyright in a blockchain-based framework for document sharing,
                preserving, and verification using ethereum
                <br></br>
                <a>View Certificate</a>
              </h6>
            </div>
          </div>

          <div className={classes.achevement}>
            <div style={{ width: 40 }}>
              <img src={RightArrow} className={classes.arrow} />
            </div>
            <div>
              <h5 className={classes.achivtxt}>
                College Merit - First Class First
              </h5>
              <h6 className={classes.achivtxt}>
                Have been a consistent topper in academics, and class
                representative maintaining a friendly and respectful
                relationship with every teacher and student.
              </h6>
            </div>
          </div>

          <div className={classes.achevement}>
            <div style={{ width: 40 }}>
              <img src={RightArrow} className={classes.arrow} />
            </div>
            <div>
              <h5 className={classes.achivtxt}>Leadership Role</h5>
              <h6 className={classes.achivtxt}>
                Managed a team of 4 employees, ensuring that a $3000-budgeted
                project was completed successfully by the expected deadline.
              </h6>
            </div>
          </div>
        </div>
        <div className={classes.highLight}>
          <img src={Language} className={classes.educationLogo} />
          <h2 className={classes.eduHigh}>LANGUAGE</h2>
        </div>
        <div>
          <TypingAnimation />

          <h5 className={classes.languageTxtSub}>English / Bengali / Hindi</h5>
        </div>
      </div>
    </div>
  );
};

export default EducationAndAward;
