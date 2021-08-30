import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ViewMoreBg from "../assets/viewmorebg.png";

// const useStyles = makeStyles({
//   root: {
//     border: "1px solid red",
//     height: "100%",
//     width: "100%",
//     background: "#000000",
//   },
//   backDrop: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background: "rgba(200, 200,200, 0.3)",
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  image: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    width: "30%",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const DisplayMore = ({ showShadow = true }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className={classes.backDrop}></div>
      <WorkUnit
        ImgSVG={TentCafeImg}
        project={"The Tent Cafe"}
        technology={"ReactJS, CSS, Firebase, Twillio, NodeJS"}
        details={
          "Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore."
        }
      /> */}
      <ButtonBase
        focusRipple
        key={"View More"}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${ViewMoreBg})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {"Highlights"}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default DisplayMore;
