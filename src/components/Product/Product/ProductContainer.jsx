import React from 'react';
import {connect} from "react-redux";
import Product from "./Product";
import {setProductStateThunkCreator, setTabActionCreator, writeReviewThunkCreator} from "../../../redux/product/product-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProductContainer extends React.Component {
    componentDidMount() {
        this.props.setProductStateThunkCreator(this.props.match.params.id);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.setProductStateThunkCreator(this.props.match.params.id);
        }
    };

    selectProductTab = (selectedKey, e) => {
        e.preventDefault();
        this.props.setTabActionCreator(selectedKey);
    };

    writeReview = (values) => {
        this.props.writeReviewThunkCreator(this.props.match.params.id, values);
    }

    render() {
        return (
            <Product state={this.props.state} selectProductTab={this.selectProductTab} writeReview={this.writeReview}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.productReducer
});

export default compose(
    connect(mapStateToProps, {setProductStateThunkCreator, setTabActionCreator, writeReviewThunkCreator}),
    withRouter)(ProductContainer);