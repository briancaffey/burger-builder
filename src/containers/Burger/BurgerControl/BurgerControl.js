import React from 'react';
import classes from './BurgerControl.css';

const BurgerControl = (props) => {
    return (
        <div className={classes.Main}>
        <div className={classes.BurgerControl}>{props.type}</div>
        <button className={classes.BurgerControlAdd} 
                onClick={() => props.more(props.type)}
        >Add</button>
        {
            props.removeValid ? 
            <button className={classes.BurgerControlRemove} 
                    onClick={() => props.less(props.type)}
            >Remove</button>
            : null       
        }
        </div>
    )
}

export default BurgerControl;