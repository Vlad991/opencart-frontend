import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart";
import {cartRemoveThunkCreator, setCartStateThunkCreator} from "../../../redux/common/cart-reducer";

class CartContainer extends React.Component {
    componentDidMount() {
        this.props.setCartStateThunkCreator();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.globalCurrency !== this.props.globalCurrency) {
            this.props.setCartStateThunkCreator();
        }
    };

    cartRemove = (product_id) => {
        this.props.cartRemoveThunkCreator(product_id);
    };

    voucherRemove = (voucher_key) => {
        console.log(voucher_key);
    };

    render() {
        return (
            <Cart state={this.props.state} cartRemove={this.cartRemove} voucherRemove={this.voucherRemove}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.cartReducer,
    globalCurrency: state.opencartReducer.globalCurrency
});

export default connect(mapStateToProps, {setCartStateThunkCreator, cartRemoveThunkCreator})(CartContainer);