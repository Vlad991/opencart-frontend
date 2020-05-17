import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart";
import {setCartStateThunkCreator} from "../../redux/checkout/cart-reducer";

class CartContainer extends React.Component {
    componentDidMount() {
        this.props.setCartStateThunkCreator();
    };

    render() {
        return (
            <Cart state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.checkoutReducer.cartReducer
});

export default connect(mapStateToProps, {setCartStateThunkCreator})(CartContainer);