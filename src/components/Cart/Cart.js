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
  };

  const { isLoading, error, sendRequest: sendOrder } = useHttp();
  const seeData =(data) => {
    console.log(data);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const { name, email } = customerDetail;



    let orderObject = {};
    for (let key in statusCtx.cartItem) {
      const item = statusCtx.cartItem[key];
      console.log(item);
       const {id, meal, amount, price} = item;
      orderObject = {...orderObject , [key]:{id:id, meal:meal, amount:amount, price:price} };
     key++;
    }

    orderObject = {name:name, email:email, ...orderObject};
    console.log(orderObject);

    sendOrder({url: "https://myreactapp-14003-default-rtdb.asia-southeast1.firebasedatabase.app/mealOrders.json", method:"POST" , headers: {
      "Content-Type": "application/json",
    },
     body:orderObject }, seeData)
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
          {hasOrder && (
            <button disabled={!formIsValid} className={classes.button}>
              Order
            </button>
          )}
            {isLoading && <p> please wait while we upload the order ! </p> }
            {error &&  <p> there seems to be problem with the system : {error} </p>  }
        </div>
      </form>
    </Modal>
  );
};
export default Cart;
