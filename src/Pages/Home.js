import React from "react";
import Logo from "../assets/logo.svg";
import HiSVG from "../assets/hello.svg";
import ComputerSVG from "../assets/computer.svg";
import DownSVG from "../assets/downarrow.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typical from "react-typical";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    overflow: "hidden",
    border: "1px solid red",
  },
  logoImage: {
    width: 220,
    height: 84,
    flex: 2,
    display: "flex",
    alignItems: "flex-start",
    paddingRight: 0,
    border: "1px solid red",
  },
  navigations: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 20,
    flex: 6,
    border: "1px solid red",
    overflow: "hidden",
  },
  navItem: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: 20,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      "letter-spacing": 0.2,
    },
    border: "1px solid red",
  },
  menus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 3,
    border: "1px solid red",
    overflow: "hidden",
  },
  hireme: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
  },
  hiremeButton: {
    minWidth: 128,
    minHeight: 47,
    background: "#FF4900",
    border: "1px solid red",
  },
  highLighted: {
    background: "#FF4900",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -20,
    paddingTop: 20,
    border: "1px solid red",
  },
  bodyDIV: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    maxHeight: "70%",
    border: "1px solid red",
    width: "95%",
    overflow: "hidden",
  },
  myname: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginLeft: 80,
    marginRight: -100,
    marginTop: 80,
    marginBottom: 80,
    border: "1px solid red",
  },
  homeImage: {
    flex: 1,
    border: "1px solid red",
    overflow: "hidden",
  },
  imageCompter: {
    maxWidth: 700,
    maxHeight: 500,
    border: "1px solid red",
    overflow: "hidden",
  },
  myNameWr: {
    textAlign: "left",
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 1000,
    fontSize: 80,
    margin: 0,
    cursor: "default",
    border: "1px solid red",
    overflow: "hidden",
  },
  hisvg: {
    maxHeight: 60,
    maxWidth: 140,
    border: "1px solid red",
    overflow: "hidden",
  },
  intro: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 30,
    textAlign: "left",
    marginTop: 5,
    height: 50,
    border: "1px solid red",
  },
  homeButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 260,
    border: "1px solid red",
  },
  downloadCV: {
    minWidth: 128,
    minHeight: 47,
    background: "#FF4900",
    border: "1px solid red",
  },
  mywork: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 600,
    border: "1px solid red",
  },
  downLogo: {
    cursor: "pointer",
    height: 60,
    marginTop: 0,
    padding: 30,
    transition: "all 0.2s ease",
    "&:hover": {
      marginTop: 20,
    },
    border: "1px solid red",
    overflow: "hidden",
  },
  downLogoSVG: {
    maxHeight: 60,
    maxWidth: 50,
    border: "1px solid red",
  },
  mLogoImg: {},
  Latter: {
    transition: "all 0.2s ease",
    "&:hover": {
      color: "#FF4900",
      fontSize: 79,
    },
    border: "1px solid red",
  },
});

const downloadCV = () =>
  window.open(
    "https://raw.githubusercontent.com/shuvenduoffline/shuvenduoffline/master/Shuvendu_CV.pdf",
    "_blank"
  );

const Home = ({ handlePageChange }) => {
  const classes = useStyles();

  const displayWork = () => handlePageChange(2);

  const smoothScrollDown = () => handlePageChange(1);

  return (
    <div className={classes.root} id="home">
      <div className={classes.navigations}>
        <div className={classes.logoImage}>
          <img src={Logo} className={classes.mLogoImg} />
        </div>
        <div className={classes.menus}>
          <div className={classes.highLighted}>
            <p className={classes.navItem} onClick={() => handlePageChange(0)}>
              .aboutMe()
            </p>
          </div>

          <p className={classes.navItem} onClick={() => handlePageChange(1)}>
            .skills()
          </p>
          <p className={classes.navItem} onClick={() => handlePageChange(2)}>
            .works()
          </p>
          <p className={classes.navItem}>.contactMe()</p>
        </div>

        <div className={classes.hireme}>
          <Button
            variant="contained"
            color="primary"
            className={classes.hiremeButton}
          >
            Hire Me!
          </Button>
        </div>
      </div>

      <div className={classes.bodyDIV}>
        <div className={classes.myname}>
          <img src={HiSVG} className={classes.hisvg}></img>
          <h1 className={classes.myNameWr}>
            <span className={classes.Latter}>S</span>
            <span className={classes.Latter}>h</span>
            <span className={classes.Latter}>u</span>
            <span className={classes.Latter}>v</span>
            <span className={classes.Latter}>e</span>
            <span className={classes.Latter}>n</span>
            <span className={classes.Latter}>d</span>
            <span className={classes.Latter}>u</span>
            <span> </span>
            <span className={classes.Latter}>D</span>
            <span className={classes.Latter}>h</span>
            <span className={classes.Latter}>a</span>
            <span className={classes.Latter}>l</span>
          </h1>
          {/* <h3 className={classes.intro}>
                        A Professional Java Developer and UI/UX Designer!
                    </h3> */}
          <Typical
            className={classes.intro}
            steps={[
              "A Professional Java Developer!",
              2000,
              "A Professional ReactJS Developer!",
              2000,
              `I build new projects just to tickle my brain and love teaching others how they're made.`,
              3000,
              `While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.`,
              3000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
          <div className={classes.homeButtons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.downloadCV}
              onClick={() => downloadCV()}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.mywork}
              onClick={() => displayWork()}
            >
              My Work
            </Button>
          </div>
        </div>

        <div className={classes.homeImage}>
          <img className={classes.imageCompter} src={ComputerSVG} />
        </div>
      </div>

      <div className={classes.downLogo}>
        <img
          src={DownSVG}
          className={classes.downLogoSVG}
          onClick={() => smoothScrollDown()}
        />
      </div>
    </div>
  );
};

export default Home;
