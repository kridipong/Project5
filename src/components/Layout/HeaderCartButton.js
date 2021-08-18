import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import StatusContext from "../status-context";

const HeaderCartButton = (props) => {
  const statusCtx = useContext(StatusContext);

  const numberOfCartItems = statusCtx.cartItem.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnHilight, setBtnHilight] = useState(false);

  const btnClasses = `${classes.button} ${btnHilight ? classes.bump : ""}`;

  useEffect(() => {
    if (statusCtx.cartItem.length > 0) {
      setBtnHilight(true);

      const timer = setTimeout(() => {
        setBtnHilight(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [statusCtx.cartItem]);

  const buttonClickHandler = (event) => {
    event.preventDefault();
    statusCtx.onShowCart();
    console.log(statusCtx.showCart);
  };

  return (
    <button className={btnClasses} onClick={buttonClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
