import React from 'react';
import classes from './BurgerIngredient.css';

const BurgerIngredient = (props) => {

    let ingredientClass = null;

    switch (props.type){
        case ('salad'):
            ingredientClass = "Salad"
            break;
        case ('bacon'):
            ingredientClass = "Bacon"
            break;
        case ('cheese'):
            ingredientClass = "Cheese"
            break;
        case ('meat'):
            ingredientClass = "Meat"
            break;
        default:
            ingredientClass = null;
    }

    return (
        <div className={classes[ingredientClass]}></div>
    )
}

export default BurgerIngredient;