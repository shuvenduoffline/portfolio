import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";


const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.light,
  },
  tooltip: {
    backgroundColor: theme.palette.common.light,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const useStyles = (color, success) =>
  makeStyles({
    "@keyframes expandIn": {
      "0%": {
        width: success - 20 + "%",
      },
      "100%": {
        opacity: success + "%",
      },
    },
    root: {
      // border : '1px solid red',
      display: "flex",
      flexDirection: "row",
      marginTop: -10,
    },
    highLight: {
      width: success + "%",
      height: 4,
      background: color,
      borderRadius: "5px 0px 0 5px",
      transition: "all 0.3s ease",
      "&:hover": {
        // background: "rgb(7, 177, 77, 0.42)",
        cursor: "pointer",
      },
      animation: "$expandIn .6s",
    },
    darkPart: {
      width: 100 - success + "%",
      height: 4,
      background: "#707070",
      borderRadius: "0 5px 5px 0px",
    },
  });

const SkillBar = ({ color, success }) => {
  const myStyle = useStyles(color, success);
  const classes = myStyle();
  // React.useEffect(() => {
  //     setTimeout(() => {

  //     },1000)
  // },[])
  return (
    <div className={classes.root}>
      <BootstrapTooltip title={success + "%"}>
        <div className={classes.highLight}></div>
      </BootstrapTooltip>

      <div className={classes.darkPart}></div>
    </div>
  );
};

export default SkillBar;
