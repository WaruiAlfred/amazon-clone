import React from "react";
import { useStateValue } from "../../store/state-provider";
import adImg from "../../assets/checkout-ad.jpg";
import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  let basketContent;
  if (basket?.length === 0) {
    basketContent = (
      <div>
        <h2>Your shopping basket is empty</h2>
        <p>
          To buy one:Find the product you want to buy and click{" "}
          <b>Add To Basket</b> button.
        </p>
      </div>
    );
  } else {
    basketContent = (
      <div>
        <h2 className={classes["checkout__title"]}>Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={classes.checkout}>
      <div className={classes["checkout__left"]}>
        <img className={classes["checkout__ad"]} src={adImg} alt="" />
        {basketContent}
      </div>
      {basket.length > 0 && (
        <div className={classes["checkout__right"]}>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
