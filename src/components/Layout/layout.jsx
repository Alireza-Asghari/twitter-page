import React from "react";
import useStyles from "./styles";

const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.right}>right</div>
        <div>main</div>
        <div>left</div>
      </div>
    </>
  );
};

export default Layout;
