import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Idea from "../assets/idea.jpg";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    // backgroundColor: "#000000",
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundImage: `url(${Idea})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  hiremeButton: {
    minWidth: 128,
    minHeight: 47,
    background: "#FF4900",
  },
  midBox: {
    width: "90%",
  },
  haveIdea: {
    fontFamily: "Poppins",
    color: "white",
  },
  makeIt: {
    fontFamily: "Poppins",
    color: "white",
  },
  ideaQ: {
    fontFamily: "Poppins",
    color: "white",
    marginBottom: 150,
    transition: "all 0.3s ease",
  },
});

const Hireme = () => {
  const classes = useStyles();
  const [fedIn, setFedIn] = React.useState(false);

  React.useEffect(() => {
    setFedIn(true);
    return () => setFedIn(false);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.midBox}>
        <Fade in={fedIn}>
          <h3 className={classes.ideaQ}>
            We Should Invest in People not Ideas. A good Idea is often destroyed
            by bad people and good people can always make a bad idea better.
          </h3>
        </Fade>

        <h4 className={classes.haveIdea}>Have any Idea in Mind?</h4>

        <h2 className={classes.makeIt}>Let's Make It Reality</h2>

        <Button
          variant="contained"
          color="primary"
          className={classes.hiremeButton}
        >
          Hire Me!
        </Button>
      </div>
    </div>
  );
};

export default Hireme;
