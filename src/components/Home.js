import React from "react";
import Product from "./Product";

import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <img
        className={classes["home__image"]}
        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        alt=""
      />

      <div className={classes["home__row"]}>
        <Product
          id="1234"
          title="The Legion"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/913Fej9rOAL._AC_UY218_.jpg"
        />

        <Product
          id="1134"
          title="Toys"
          price={15.13}
          rating={4}
          image="https://m.media-amazon.com/images/I/61LRy7J-eXL._AC_UL320_.jpg"
        />
      </div>

      <div className={classes["home__row"]}>
        <Product
          id="1267"
          title="Kitchen Ware"
          price={9.23}
          rating={3}
          image="	https://m.media-amazon.com/images/I/71ygLu2o0OL._AC_SY200_.jpg"
        />

        <Product
          id="1234"
          title="Amazon bluetooth speaker"
          price={21.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ASu-5HgBL._AC_SY200_.jpg"
        />

        <Product
          id="1234"
          title="E Reader"
          price={9.12}
          rating={3}
          image="	https://m.media-amazon.com/images/I/61Ww4abGclL._AC_UY218_.jpg"
        />
      </div>

      <div className={classes["home__row"]}>
        <Product
          id="1034"
          title="Ski Mask"
          price={14.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/51EdlHchUeL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
