import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import StatusContext from "../status-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import CheckOutForm from "../CheckOut/CheckOutForm";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
  const [customerDetail, setCustomerDetail] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const statusCtx = useContext(StatusContext);

  const onAddItemHandler = (item) => {
    statusCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveItemHandler = (id) => {
    statusCtx.removeItem(id);
  };

  const hasOrder = statusCtx.cartItem.length > 0;

  const cartItems = statusCtx.cartItem.map((item) => (
    <CartItem
      key={item.id}
      name={item.meal}
      amount={item.amount}
      price={item.price}
      onAdd={onAddItemHandler.bind(null, item)}
      onRemove={onRemoveItemHandler.bind(null, item.id)}
    />
  ));

  const onCloseHandler = (event) => {
    event.preventDefault();
    statusCtx.onHideCart();
  };

  
  const getCustomer = (data) => {
    setCustomerDetail(data);
    setFormIsValid(data.formIsValid);
    console.log(data.formIsValid);
  };



  const submitHandler = (event) => {
    event.preventDefault();
    const {name, email} = customerDetail;

    for (let key in statusCtx.cartItem) {
     console.log(statusCtx.cartItem[key]);
     key++; 
    }
    console.log(`${name}  and ${email} `);

  };


  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <CheckOutForm customer={getCustomer} />
        <ul>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{statusCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onCloseHandler}>
            Close
          </button>
          {hasOrder && <button disabled ={!formIsValid} className={classes.button}>Order</button>}
        </div>
      </form>
    </Modal>
  );
};
export default Cart;
