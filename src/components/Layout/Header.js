import React, {Fragment} from 'react';
import mealImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';


const Header =() =>{

return <Fragment>
<header className = {classes.header}>
    <h2>COFFEE BY THAT DUDE</h2>
    <HeaderCartButton />
</header>
<img src={mealImage} alt="Welcome to Delicious Meals" className = {classes['main-image']} />
</Fragment>

};
export default Header;

