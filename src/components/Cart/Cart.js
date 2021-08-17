import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import StatusContext from "../status-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const statusCtx = useContext(StatusContext);

  const onAddItemHandler =(item) => {


  };

  const onRemoveItemHandler = (id) => {

  };

  const hasOrder = (statusCtx.cartItem.length>0);


  const cartItems = statusCtx.cartItem.map((item) => (
    <CartItem
      key={item.id}
      name={item.meal}
      amount={item.amount}
      price={item.price}
      onAdd = {onAddItemHandler.bind(null,item)}
      onRemove = {onRemoveItemHandler.bind(null,item.id)}
    />
  ));

  const onCloseHandler = (event) => {
    event.preventDefault();
    statusCtx.onHideCart();
  };

  return (
    <Modal>
      <ul>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{statusCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseHandler}>
          Close
        </button>
        {hasOrder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
