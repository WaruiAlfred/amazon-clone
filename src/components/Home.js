import React from "react";

import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <img className={classes['home__image']} src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' alt="" />
    </div>
  );
}

export default Home;
