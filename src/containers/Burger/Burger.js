import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerControl from './BurgerControl/BurgerControl';
import BurgerControls from './BurgerControls/BurgerControls';
import classes from './Burger.css';
import Aux from '../../hoc/Aux';
import OrderSummary from '../../containers/Burger/OrderSummary/OrderSummary';

import Modal from '../../components/UI/Modal/Modal';

class Burger extends Component {

    state = {
        purchasable:false,
        purchasing: false,
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

    closeModal = () => {
        this.setState({purchasing:false})
    }

    cancelOrder = () => {
        this.setState({purchasing:false})
    }

    confirmOrder = () => {
        alert("Order Confirmed")
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    increase = (type) => {
        const contents = {...this.state}
        const total = contents.total;

        const newTotal = total + this.prices[type];
        const purchasable = newTotal != 0 ? true : false;
        contents.ingredients[type] = contents.ingredients[type]+1;

        this.setState({
            ingredients: contents.ingredients, 
            total: newTotal,
            purchasable: purchasable
        })
    };

    decrease = (type) => {
        const contents = {...this.state}
        const total = contents.total;
        
        if(contents.ingredients[type] > 0){
            const newTotal = total - this.prices[type];
            const purchasable = newTotal != 0 ? true : false;
            contents.ingredients[type] = contents.ingredients[type]-1;
            this.setState({
                ingredients: contents.ingredients,
                total:newTotal,
                purchasable: purchasable
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
                <Modal 
                    click={this.closeModal} 
                    show={this.state.purchasing}
                    >
                   
                    <OrderSummary 
                        confirmOrder={this.confirmOrder}
                        cancelOrder={this.cancelOrder}
                        ingredients={this.state.ingredients} />
                </Modal>
                <BurgerControls 
                    total={this.state.total} 
                    ingredients={this.state.ingredients}
                    more={this.increase}
                    less={this.decrease}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    


                />
            </Aux>
        )
    }
}

export default Burger;