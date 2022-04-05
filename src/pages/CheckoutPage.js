import React, { Fragment } from "react";
import Checkout from "../components/checkout/Checkout";
import Header from "../components/Header";

function CheckoutPage() {
  return (
    <Fragment>
      <Header />
      <Checkout/>
    </Fragment>
  );
}

export default CheckoutPage;
