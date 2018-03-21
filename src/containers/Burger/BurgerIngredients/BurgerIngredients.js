import React from 'react';

import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import classes from '../BurgerIngredient/BurgerIngredient.css';
import Aux from '../../../hoc/Aux';

const BurgerIngredients = (props) => {
    const burger = [];
    const ingredients = {...props.ingredients}
    for (let i in ingredients){
        for (let _ in [...Array(ingredients[i]).keys()]){
            burger.push(<BurgerIngredient key={i+_} type={String(i)} />)
        }
    }

    return (
        <Aux>
            <div className={classes.BunTop}></div>
        {burger.length===0 ? <p style={{textAlign: 'center'}}><strong>Add some ingredients!</strong></p>:burger}
            <div className={classes.BunBottom}></div>
        </Aux>
    )
}

export default BurgerIngredients;