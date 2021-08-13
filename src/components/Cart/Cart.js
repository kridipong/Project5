import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import StatusContext from "../status-context";
import { useContext } from "react";

const Cart = (props) => {
  const statusCtx = useContext(StatusContext);

  const cartItems = statusCtx.cartItem.map((item) => <li> {item.meal} {item.amount} </li>);

  const onCloseHandler = (event) => {
    event.preventDefault();
    statusCtx.onHideCart();
    console.log(statusCtx.showCart);
  };

  return (
    <Modal>
      <ul>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>120 Bht</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
