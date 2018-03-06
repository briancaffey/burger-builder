import React from 'react';
import classes from './BurgerControl.css';

const BurgerControl = (props) => {

    return (
        <div className={classes.Main}>
            <div className={classes.BurgerControl}>{props.type}</div>
            <button className={classes.BurgerControlAdd} 
                    onClick={() => props.more(props.type)}
            >
                <span role="img" aria-label="plus">➕</span>
            </button>

            <button className={classes.BurgerControlRemove} 
                    onClick={() => props.less(props.type)}
                    disabled={!props.removeValid}
            >
                <span role="img" aria-label="minus">➖</span>
            </button>
        </div>
    )
}

export default BurgerControl;