import React from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )         
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger witht the following:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button click={props.confirmOrder} btnType="Success">CONTINUE</Button>            
            <Button click={props.cancelOrder} btnType="Danger">CANCEL</Button>
        </Aux>
    )
};

export default orderSummary;