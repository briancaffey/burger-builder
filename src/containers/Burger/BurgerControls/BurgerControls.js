import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from '../BurgerControl/BurgerControl';
import Aux from '../../../hoc/Aux';

const BurgerControls = (props) => {

    const controls = [...Object.keys(props.ingredients)].map(i=>
        (
            <BurgerControl 
                key={i}
                currentAmount={props.ingredients[i]} 
                type={i}
                removeValid={props.ingredients[i] > 0}
                more={props.more} 
                less={props.less}
            />
        )
    )

    return (
        <Aux>
        <div className={classes.BurgerControls}>
            <div className={classes.BurgerControlsContainer} valid={props.valid}>
            <div className={classes.Price}>Total: ${props.total.toFixed(2)}</div>
                {controls}
            </div>
            <button 
                    onClick={props.ordered} 
                    className={classes.OrderButton}
                    disabled={!props.purchasable}
                    style={{ 
                        'backgroundColor': props.purchasable ? 'orange':'grey',}} 
                    
            >ORDER NOW</button>
        </div>
        
        </Aux>
    )
}

export default BurgerControls;