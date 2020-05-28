import React from 'react';
import {connect} from "react-redux";
import Category from "./Category";
import {setCategoryDisplayThunkCreator, setCategoryStateThunkCreator} from "../../../redux/product/category-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class CategoryContainer extends React.Component {
    componentDidMount() {
        this.props.setCategoryStateThunkCreator(this.props.match.params.first, this.props.match.params.second);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.first !== prevProps.match.params.first || this.props.match.params.second !== prevProps.match.params.second) {
            this.props.setCategoryStateThunkCreator(this.props.match.params.first, this.props.match.params.second);
        }
    };

    render() {
        return (
            <Category state={this.props.state} setDisplay={this.props.setCategoryDisplayThunkCreator}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.categoryReducer
});

export default compose(
    connect(mapStateToProps, {setCategoryStateThunkCreator, setCategoryDisplayThunkCreator}),
    withRouter)(CategoryContainer);