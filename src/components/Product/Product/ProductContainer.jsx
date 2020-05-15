import React from 'react';
import {connect} from "react-redux";
import Product from "./Product";
import {setProductStateThunkCreator, setTabActionCreator} from "../../../redux/product/product-reducer";

class ProductContainer extends React.Component {
    componentDidMount() {
        this.props.setProductStateThunkCreator(this.props.firstLevelId, this.props.secondLevelId, this.props.productId);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.productId !== prevProps.productId) {
            this.props.setProductStateThunkCreator(this.props.firstLevelId, this.props.secondLevelId, this.props.productId);
        }
    };

    selectProductTab = (selectedKey, e) => {
        e.preventDefault();
        this.props.setTabActionCreator(selectedKey);
    };

    render() {
        return (
            <Product state={this.props.state} selectProductTab={this.selectProductTab}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.productReducer
});

export default connect(mapStateToProps, {setProductStateThunkCreator, setTabActionCreator})(ProductContainer);