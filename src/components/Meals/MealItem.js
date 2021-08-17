import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import StatusContext from "../status-context";

const MealItem = (props) => {
  const statusCtx = useContext(StatusContext);

  const addToCartHandler = (amount) => {
    statusCtx.addItem({
      id: props.data.id,
      meal: props.data.meal,
      amount: amount,
      price: props.data.price,
    });
    statusCtx.onShowCart();

  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.data.meal}</h3>
        <div className={classes.description}>{props.data.description} </div>
        <div className={classes.price}>{props.data.price}</div>
      </div>
      <div>
        <MealItemForm id={props.data.id} onAddToCart ={addToCartHandler}/>
      </div>
    </li>
  );
};
export default MealItem;
