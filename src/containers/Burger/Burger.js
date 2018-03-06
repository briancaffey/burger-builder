import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerControl from './BurgerControl/BurgerControl';
import BurgerControls from './BurgerControls/BurgerControls';
import classes from './Burger.css';
import Aux from '../../hoc/Aux';

class Burger extends Component {

    state = {
        ingredients: {
            salad: 0, 
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        total: 0,
    }
    
    prices = {
        'salad':0.5,
        'bacon':0.75,
        'cheese':0.60,
        'meat':1.30,
    }

    increase = (type) => {
        const contents = {...this.state}
        const total = contents.total;

        const newTotal = total + this.prices[type];
        contents.ingredients[type] = contents.ingredients[type]+1;

        this.setState({
            ingredients: contents.ingredients, 
            total: newTotal,
        })
    };

    decrease = (type) => {
        const contents = {...this.state}
        const total = contents.total;
        
        if(contents.ingredients[type] > 0){
            const newTotal = total - this.prices[type];
            contents.ingredients[type] = contents.ingredients[type]-1;
            this.setState({
                ingredients: contents.ingredients,
                total:newTotal,
            })
        }
    };

    controls = [...Object.keys(this.state.ingredients)].map(i=>
            (
                <BurgerControl 
                    currentAmount={this.state.ingredients[i]} 
                    type={i}
                    removeValid={this.state.ingredients[i] > 0}
                    more={this.increase} 
                    less={this.decrease}
                />
            )
        )

    render(){
        return (
            <Aux>
                <div className={classes.Burger}>
                    <BurgerIngredients ingredients={this.state.ingredients} />
                </div>
                <BurgerControls 
                    total={this.state.total} 
                    ingredients={this.state.ingredients}
                    more={this.increase}
                    less={this.decrease}
                />
            </Aux>
        )
    }
}

export default Burger;