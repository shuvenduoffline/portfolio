import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubCalendar from "github-calendar";

const useStyles = makeStyles({
  root: {
    border: "1px solid red",
    height: "100%",
    paddingTop: 20,
    background: "#000000",
  },
});

const Activity = () => {
  const classes = useStyles();
  //   GitHubCalendar(".calendar", "shuvenduoffline", {
  //     responsive: true,
  //     tooltips: true,
  //   });
  return (
    <div className={classes.root} id="activity">
      <div class="calendar">
        <img src="https://grass-graph.moshimo.works/images/shuvenduoffline.png?background=none" />
      </div>
    </div>
  );
};

export default Activity;
