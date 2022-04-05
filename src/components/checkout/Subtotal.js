import React, { Fragment } from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../store/state-provider";
import { getBasketTotal } from "../../store/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={classes["subtotal__gift"]}>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
