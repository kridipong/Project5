import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";


const MealItemForm = (props) => {


  const amountInputRef = useRef();

  const [inputValid, setInputValid] = useState(true);
  const onAddHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 0
    ) {
      setInputValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    console.log("activated");
  };

    return (
      <form className={classes.form} onSubmit = {onAddHandler} >
        <Input
          ref ={amountInputRef}
          label='Amount'
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
      <button >+Add</button>
      {!inputValid && <p>Please put valid amount of meal (1-5)</p>}
      </form>

      
    );
};
export default MealItemForm;
