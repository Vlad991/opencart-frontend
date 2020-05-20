import React from 'react';
import {connect} from "react-redux";
import Featured from "./Featured";
import {cartAddThunkCreator, compareAddThunkCreator, wishlistAddThunkCreator} from "../../../../redux/opencart-reducer";

class FeaturedContainer extends React.Component {
    componentDidMount() {
    };

    cartAdd = (product_id) => {
        this.props.cartAddThunkCreator(product_id);
    };

    wishlistAdd = (product_id) => {
        this.props.wishlistAddThunkCreator(product_id);
    };

    compareAdd = (product_id) => {
        this.props.compareAddThunkCreator(product_id);
    };

    render() {
        return (
            <Featured state={this.props.state} cartAdd={this.cartAdd} wishlistAdd={this.wishlistAdd} compareAdd={this.compareAdd}/>
        );
    };
}


let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {cartAddThunkCreator, wishlistAddThunkCreator, compareAddThunkCreator})(FeaturedContainer);