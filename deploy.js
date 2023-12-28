const ghpages = require("gh-pages");

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "git@github.com:shuvenduoffline/shuvenduoffline.github.io.git",
  },
  () => console.log("Published !!")
);
