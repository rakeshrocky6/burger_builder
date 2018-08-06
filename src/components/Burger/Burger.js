import React from 'react';
import classes from './burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";


const burger = (props) => {
    let transFormedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    });
    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>
            {transFormedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>

    );
};
export default burger;