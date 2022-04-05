import React from "react";
import { useStateValue } from "../../store/state-provider";
import classes from "./CheckoutProduct.module.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [_, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className={classes.checkoutProduct}>
      <img className={classes["checkoutProduct__image"]} src={image} alt="" />

      <div className={classes["checkoutProduct__info"]}>
        <p className={classes["checkoutProduct__title"]}>{title}</p>

        <p className={classes["checkoutProduct__price"]}>
          <small> &#163;</small>
          <strong>{price}</strong>
        </p>

        <div className={classes["checkoutProduct__rating"]}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
