import React from "react";
import { useStateValue } from "../store/state-provider";
import classes from "./Product.module.css";

function Product({ id, title, image, price, rating }) {
  const [_,dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className={classes.product}>
      <div className={classes["product__info"]}>
        <p>{title}</p>
        <p className={classes["product__price"]}>
          <small> &#163;</small>
          <strong>{price}</strong>
        </p>
        <div className={classes["product__rating"]}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
