import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Idea from "../assets/idea.jpg";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    backgroundImage: `url(${Idea})`,
    backgroundSize: "cover",
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
    marginBottom: 40,
    transition: "all 0.3s ease",
  },
});

const Hireme = ({ handlePageChange }) => {
  const classes = useStyles();
  const [fedIn, setFedIn] = React.useState(false);

  React.useEffect(() => {
    setFedIn(true);
    return () => setFedIn(false);
  }, []);

  const hireMe = () => handlePageChange(8);

  return (
    <div className={classes.root} id="hireme">
      <div className={classes.midBox}>
        <Fade in={fedIn}>
          <h3 className={classes.ideaQ}>
            The first step is to establish that something is possible; Then
            probability will occur.
          </h3>
        </Fade>

        <h4 className={classes.haveIdea}>Have any Idea in Mind?</h4>

        <h2 className={classes.makeIt}>Let's Make It Reality</h2>

        <Button
          variant="contained"
          color="primary"
          className={classes.hiremeButton}
          onClick={() => hireMe()}
        >
          Hire Me!
        </Button>
      </div>
    </div>
  );
};

export default Hireme;
