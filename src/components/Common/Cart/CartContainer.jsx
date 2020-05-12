import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart";
import {commonAPI} from "../../../api/api";
import {setStateActionCreator} from "../../../redux/common/cart-reducer";

class CartContainer extends React.Component {
    componentDidMount() {
        commonAPI.getCart().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Cart state={this.props.state} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.cartReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(CartContainer);