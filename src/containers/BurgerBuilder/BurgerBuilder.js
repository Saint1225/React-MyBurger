import React, {Component} from 'react';
import Auxi from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        purchasing: false
        }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredient
        // };
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0)
        return  sum === 0;
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () =>{
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () =>{
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    componentDidMount(){
        console.log(this.props);
        this.props.onInitIngredients();
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let order = null;

        let burger = this.props.error ? <p>Ingredients can't be loaded!!</p> : <Spinner>Loading...</Spinner>;

        if (this.props.ings){
            burger = (
            <Auxi>
                <Burger ingredients={this.props.ings}></Burger>;
                <BurgerControls 
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                price={this.props.price}
                purchaseable={this.updatePurchaseState(this.props.ings)}
                ordered={this.purchaseHandler}
                ></BurgerControls>
            </Auxi>);
            order = <OrderSummary 
                ingredient={this.props.ings}
                price={this.props.price}
                continue={this.purchaseContinueHandler}
                cancel={this.purchaseCancelHandler}
                ></OrderSummary>;
        }

        // console.log(disabledInfo);
        return (
            <Auxi>
                <div>
                    {burger}
                </div>
                <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler}>
                    {order}
                </Modal>
            </Auxi>
        );
    }
}

 const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalprice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));