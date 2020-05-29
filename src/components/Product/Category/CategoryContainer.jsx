import React from 'react';
import {connect} from "react-redux";
import Category from "./Category";
import {setCategoryDisplayThunkCreator, setCategoryStateThunkCreator} from "../../../redux/product/category-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class CategoryContainer extends React.Component {
    state = {
        sort: '',
        order: '',
        limit: ''
    }

    componentDidMount() {
        let urlParams = new URLSearchParams(this.props.location.search);
        this.props.setCategoryStateThunkCreator(
            this.props.match.params.first,
            this.props.match.params.second,
            urlParams.get('sort'),
            urlParams.get('order'),
            urlParams.get('limit'));
        this.setState({
            sort: urlParams.get('sort'),
            order: urlParams.get('order'),
            limit: urlParams.get('limit')
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.first !== prevProps.match.params.first || this.props.match.params.second !== prevProps.match.params.second || this.props.sort !== prevProps.sort) {
            this.props.setCategoryStateThunkCreator(this.props.match.params.first, this.props.match.params.second);
        }
    };

    doSort = (sort, order) => {
        let urlParams = new URLSearchParams(this.props.location.search);
        urlParams.set('sort', sort);
        urlParams.set('order', order);
        this.props.setCategoryStateThunkCreator(
            this.props.match.params.first,
            this.props.match.params.second,
            urlParams.get('sort'),
            urlParams.get('order'),
            urlParams.get('limit'));
    };

    doLimit = (limit) => {
        let urlParams = new URLSearchParams(this.props.location.search);
        urlParams.set('limit', limit);
        this.props.setCategoryStateThunkCreator(
            this.props.match.params.first,
            this.props.match.params.second,
            urlParams.get('sort'),
            urlParams.get('order'),
            urlParams.get('limit'));
    };

    render() {
        return (
            <Category state={this.props.state} setDisplay={this.props.setCategoryDisplayThunkCreator} doSort={this.doSort} doLimit={this.doLimit}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.categoryReducer
});

export default compose(
    connect(mapStateToProps, {setCategoryStateThunkCreator, setCategoryDisplayThunkCreator}),
    withRouter)(CategoryContainer);