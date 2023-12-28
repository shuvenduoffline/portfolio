import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import RightArrowSVG from "../assets/rightarrow.svg";

const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#000000",
  },
  heading: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 1000,
    fontSize: 35,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 6,
    height: "100%",
    backgroundColor: "#000000",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginLeft: 100,
  },
  left: {
    flex: 2,
    marginRight: 100,
  },
  description: {
    fontFamily: "Poppins",
    color: "white",
    textAlign: "center",
    fontWeight: 600,
  },
  showCase: {
    flex: 4,
    height: "60vh",
    borderRadius: 8,
    transition: "all 0.3s ease",
    "&:hover": {
      "box-shadow":
        "0 14px 28px rgba(25,25,25,0.25), 0 10px 10px rgba(25,25,25,0.22)",
      scale: 1.01,
      cursor: "pointer",
    },
    maxWidth: 650,
    marginLeft: 100,
  },
  projectName: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: 22,
  },
  techs: {
    fontFamily: "Poppins",
    color: "white",
    margin: 0,
    marginTop: -30,
    fontSize: 15,
  },
  projectDec: {
    fontFamily: "Poppins",
    color: "white",
  },
  rightArrow: {
    width: 27,
    height: 13,
    cursor: "pointer",
    padding: 20,
    transition: "all 0.3s ease",
    "&:hover": {
      // background: "rgb(7, 177, 77, 0.42)",
      scale: 1.2,
    },
  },
});

const openLink = (link) => link && window.open(link, "_blank");

const WorkUnitLeft = ({ ImgSVG, project, technology, details, link = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <h4 className={classes.projectName}> {project} </h4>
        <p className={classes.techs}>{technology}</p>
        <p className={classes.projectDec}>{details}</p>
        <img
          src={RightArrowSVG}
          className={classes.rightArrow}
          onClick={() => openLink(link)}
          alt={"right_arrow_svg"}
        />
      </div>
      <div className={classes.left}>
        <img
          src={ImgSVG}
          className={classes.showCase}
          onClick={() => openLink(link)}
          alt={"show_case_logo"}
        />
      </div>
    </div>
  );
};

export default WorkUnitLeft;
