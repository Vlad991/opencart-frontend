import React from 'react';
import {connect} from "react-redux";
import Category from "./Category";
import {productAPI} from "../../../api/api";
import {setStateActionCreator} from "../../../redux/product/category-reducer";

class CategoryContainer extends React.Component {
    componentDidMount() {
        productAPI.getCategory(this.props.firstLevelId, this.props.secondLevelId).then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Category state={this.props.state} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.categoryReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(CategoryContainer);