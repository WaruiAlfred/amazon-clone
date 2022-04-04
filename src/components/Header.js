import React from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../assets/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import classes from "./Header.module.css";

function Header() {
  return (
    <nav className={classes.header}>
      <Link to="/">
        <img className={classes["header__logo"]} src={amazonLogo} alt="" />
      </Link>

      <div className={classes["header__search"]}>
        <input type="text" className={classes["header__searchInput"]} />
        <SearchIcon className={classes["header__searchIcon"]} />
      </div>

      <div className={classes["header__nav"]}>
        <Link to="login" className={classes["header__link"]}>
          <div className={classes["header__option"]}>
            <span className={classes["header__optionLineOne"]}>
              Hello Aldis
            </span>
            <span className={classes["header__optionLineTwo"]}>Sign In</span>
          </div>
        </Link>

        <Link to="/" className={classes["header__link"]}>
          <div className={classes["header__option"]}>
            <span className={classes["header__optionLineOne"]}>Returns</span>
            <span className={classes["header__optionLineTwo"]}>& Orders</span>
          </div>
        </Link>

        <Link to="/" className={classes["header__link"]}>
          <div className={classes["header__option"]}>
            <span className={classes["header__optionLineOne"]}>Your</span>
            <span className={classes["header__optionLineTwo"]}>Prime</span>
          </div>
        </Link>

        <Link to="checkout" className={classes["header__link"]}>
          <div className={classes["header__optionBasket"]}>
            <ShoppingCartIcon />

            <span
              className={`${classes["header__optionLineTwo"]} ${classes["header__basketCount"]}`}
            >
              0
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
