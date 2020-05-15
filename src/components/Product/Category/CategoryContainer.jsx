import React from 'react';
import {connect} from "react-redux";
import Category from "./Category";
import {setCategoryStateThunkCreator} from "../../../redux/product/category-reducer";

class CategoryContainer extends React.Component {
    componentDidMount() {
        this.props.setCategoryStateThunkCreator();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.firstLevelId !== prevProps.firstLevelId || this.props.secondLevelId !== prevProps.secondLevelId) {
            this.props.setCategoryStateThunkCreator(this.props.firstLevelId, this.props.secondLevelId);
        }
    };

    render() {
        return (
            <Category state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.categoryReducer
});

export default connect(mapStateToProps, {setCategoryStateThunkCreator})(CategoryContainer);