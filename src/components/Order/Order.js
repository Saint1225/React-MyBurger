import React from 'react';
import classes from './Order.module.css';

const Order = (props) =>{
    const ingredients = [];
    console.log(props.ingredients);
    for (let item in props.ingredients) {
        ingredients.push(<span 
            style={{
                textTransform: 'capitalize', 
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={item}>{item} ({props.ingredients[item]}) </span>)
    }
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>USD: {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
};

export default Order;