import React from 'react';
import {connect} from "react-redux";
import Product from "./Product";
import {productAPI} from "../../../api/api";
import {setStateActionCreator} from "../../../redux/product/product-reducer";

class ProductContainer extends React.Component {
    componentDidMount() {
        productAPI.getProduct(this.props.firstLevelId, this.props.secondLevelId, this.props.productId).then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Product state={this.props.state} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.productReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(ProductContainer);