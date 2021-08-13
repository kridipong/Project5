import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
// import Button from "../UI/Button";
import Input from "../UI/Input";
import statusContext from '../status-context';

const MealItemForm = (props) => {

  const statusCtx = useContext(statusContext);
  const onAddHandler = (event)=> {
    event.PreventDefault();
    statusCtx.onShowCart();
    console.log('activated');
  };

  return (
    <form action="" className={classes.form}  onSubmit ={onAddHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          default: "1",
        }}
      />

      <button type="submit" >+Add</button>
    </form>
  );
};
export default MealItemForm;
