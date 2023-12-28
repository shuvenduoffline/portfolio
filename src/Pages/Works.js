import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TentCafeImg from "../assets/tent_cafe.PNG";
import WorkUnit from "../Component/WorkUnit";

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
    marginTop: 0,
  },
  description: {
    fontFamily: "Poppins",
    color: "white",
    textAlign: "center",
    marginLeft: 200,
    marginRight: 200,
    fontWeight: 600,
  },
  viewAllButton: {
    minWidth: 128,
    minHeight: 47,
    background: "#FF4900",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 510,
    "&:hover": {
      color: "black",
    },
  },
  viewAllDiv: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

const Works = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="work">
      <h2 className={classes.heading}>My Works</h2>
      <p className={classes.description}>
        If something has to be designed and invented, and you have to figure out
        how to ensure that the value of the thing you create is greater than the
        cost of the inputs, then that is probably my core skill.
      </p>

      {/* <div className={classes.container}>
                 
                     <img src={TentCafeImg} className={classes.showCase}/>
                 
                    <div className={classes.right}>
                      <h4 className={classes.projectName}> The Tent Cafe </h4>
                      <p className={classes.techs}>React JS, CSS</p>
                      <p className={classes.projectDec}>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                      <img src={RightArrowSVG} className={classes.rightArrow}/>
                    </div>
             </div> */}

      <div>
        <WorkUnit
          ImgSVG={TentCafeImg}
          project={"The Tent Cafe (ChatBot & WebApp)"}
          technology={"ReactJS, Serverless, Firebase, Twilio, WhatsApp ChatBot"}
          details={
            "Platform to book table, order food via WhatsApp chatbot. The cafe could book and manage booking through an interactive dashboard. Boosted cafes revenue by 30% using this solution."
          }
          link={"https://thetentcafe-d80c3.web.app/"}
        />
      </div>

      {/* 
      <WorkUnit
        ImgSVG={TentCafeImg}
        project={"The Tent Cafe"}
        technology={"ReactJS, CSS, Firebase, Twillio, NodeJS"}
        details={
          "Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore."
        }
      />

      {showAll && (
        <>
          <WorkUnit
            ImgSVG={TentCafeImg}
            project={"The Tent Cafe"}
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
        </>
      )}

      {!showAll && (
        <div className={classes.viewAllDiv}>
          <Button
            variant="contained"
            className={classes.viewAllButton}
            onClick={() => setShowAll(!showAll)}
          >
            View All
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default Works;
