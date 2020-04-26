import React from 'react';
import {connect} from "react-redux";
import Product from "./Product";
import {productAPI} from "../../../api/api";
import {setStateActionCreator, setTabActionCreator} from "../../../redux/product/product-reducer";

class ProductContainer extends React.Component {
    componentDidMount() {
        productAPI.getProduct(this.props.firstLevelId, this.props.secondLevelId, this.props.productId).then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    selectProductTab = (selectedKey, e) => {
        e.preventDefault();
        this.props.setTabActionCreator(selectedKey);
    }

    render() {
        return (
            <Product state={this.props.state} dispatch={this.props.dispatch} selectProductTab={this.selectProductTab}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.productReducer
});

export default connect(mapStateToProps, {setStateActionCreator, setTabActionCreator})(ProductContainer);