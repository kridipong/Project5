import { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isValidEmail = (value) => value.includes("@");
const CheckOutForm = (props) => {
  const {
    enteredValue: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  
} = useInput(isNotEmpty);

const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  
} = useInput(isValidEmail);

const formIsValid = !nameHasError && !emailHasError;

 useEffect(()=>{
    props.customer({name:enteredName, email:enteredEmail, formIsValid: formIsValid });
 },[enteredName, enteredEmail, formIsValid] );



  const nameClassControl = !nameHasError ? "form-control" : "form-control invalid";
  const emailClassControl = !emailHasError ? "form-control" : "form-control invalid";


  

  return (
    <form>

        <div className={nameClassControl}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameHasError && <p>the input cannot be empty!</p>}
        </div>

        <div className={emailClassControl}>
          <label htmlFor="email">your email</label>
          <input
            type="text"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && <p>the input cannot be empty!</p>}
        </div>

    </form>
  );
};

export default CheckOutForm;
