import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from '../BurgerControl/BurgerControl';

const BurgerControls = (props) => {

    const controls = [...Object.keys(props.ingredients)].map(i=>
        (
            <BurgerControl 
                currentAmount={props.ingredients[i]} 
                type={i}
                removeValid={props.ingredients[i] > 0}
                more={props.more} 
                less={props.less}
            />
        )
    )

    return (
        <div className={classes.BurgerControls}>
            <div>Total: ${props.total.toFixed(2)}</div>
            <div className={classes.BurgerControlsContainer} valid={props.valid}>
                {/* {props.children} */}
                {controls}
            </div>
        </div>
    )
}

export default BurgerControls;