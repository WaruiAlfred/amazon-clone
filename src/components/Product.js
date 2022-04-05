import React from "react";
import classes from "./Product.module.css";

function Product({ id, title, image, price, rating }) {
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
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
