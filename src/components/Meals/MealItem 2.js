import React , {Fragment} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem=props=>{


return <li className={classes.meal} key = {props.data.id}>
    <div>
        <h3>{props.data.meal}</h3>
        <div className = {classes.description}>{props.data.description}   </div>
        <div className = {classes.price}>{props.data.price}</div>

    </div>

    <MealItemForm id= {props.data.id}/>
    </li>





};
export default MealItem;
