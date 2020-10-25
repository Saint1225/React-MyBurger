import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate(){
        console.log('[OrderSummary] will update');
    }

    render(){
        const ingredients = Object.keys(this.props.ingredient).map((igkey) => {
            return(
                <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredient[igkey]}
                </li>
            )
        })
        return (
            <Auxi>
            <p>Your Order</p>
            <p>Here's your burger's ingredients:</p>
            <ul>{ingredients}</ul>
            <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnstyle="Success" clicked={this.props.continue}>Continue</Button>
            <Button btnstyle="Danger" clicked={this.props.cancel}>Cancel</Button>
        </Auxi>
        )
    }
}

export default OrderSummary;