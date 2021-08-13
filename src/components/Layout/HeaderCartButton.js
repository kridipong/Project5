import React, { useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import  StatusContext from '../status-context';

const HeaderCartButton =props=>{

    const statusCtx = useContext(StatusContext);
    const buttonClickHandler =(event)=>{
        event.preventDefault();
        statusCtx.onShowCart();
        console.log(statusCtx.showCart);
    }


    return <button className = {classes.button} onClick = {buttonClickHandler}>
        <span className ={classes.icon}>
            <CartIcon/>
        </span>
        <span className = {classes.bump}>
           your cart 
        </span>
        <span className = {classes.badge}>{statusCtx.cartItem.length}</span>
        </button>

}
export default HeaderCartButton;