import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TentCafeImg from "../assets/tent_cafe.PNG";
import RightArrowSVG from "../assets/rightarrow.svg";

const useStyles = makeStyles({
  root: {
    // border: '1px solid red',
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
    flex: 3,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    padding: 50,
  },
  description: {
    fontFamily: "Poppins",
    color: "white",
    textAlign: "center",
    fontWeight: 600,
  },
  showCase: {
    flex: 3,
    marginRight: 100,
    height: "60vh",
    borderRadius: 8,
    maxWidth: 750,
    transition: "all 0.3s ease",
    "&:hover": {
      "box-shadow":
        "0 14px 28px rgba(25,25,25,0.25), 0 10px 10px rgba(25,25,25,0.22)",
      scale: 1.01,
      cursor: "pointer",
    },
  },
  projectName: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: 20,
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

const WorkUnitLeft = ({ ImgSVG, project, technology, details }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <h4 className={classes.projectName}> {project} </h4>
        <p className={classes.techs}>{technology}</p>
        <p className={classes.projectDec}>{details}</p>
        <img src={RightArrowSVG} className={classes.rightArrow} />
      </div>

      <img src={ImgSVG} className={classes.showCase} />
    </div>
  );
};

export default WorkUnitLeft;
