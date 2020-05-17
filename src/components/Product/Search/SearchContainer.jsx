import React from 'react';
import {connect} from "react-redux";
import Search from "./Search";
import {setSearchStateThunkCreator} from "../../../redux/product/search-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {setSearchTextActionCreator} from "../../../redux/common/search-reducer";

class SearchContainer extends React.Component {
    componentDidMount() {
        if (this.props.match.params) {
            this.props.setSearchStateThunkCreator(
                this.props.match.params.search,
                this.props.match.params.categoryId,
                this.props.match.params.subCategory,
                this.props.match.params.description);
            if (this.props.match.params.search) {
                this.props.setSearchTextActionCreator(this.props.match.params.search);
            }
        } else {
            this.props.setSearchStateThunkCreator();
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.search !== prevProps.match.params.search || this.props.match.params.categoryId !== prevProps.match.params.categoryId || this.props.match.params.subCategory !== prevProps.match.params.subCategory || this.props.match.params.description !== prevProps.match.params.description) {
            this.props.setSearchStateThunkCreator(
                this.props.match.params.search,
                this.props.match.params.categoryId,
                this.props.match.params.subCategory,
                this.props.match.params.description);
        }
    };

    doSearch = (search, categoryId, subCategory, description) => {
        this.props.setSearchStateThunkCreator(search, categoryId, subCategory, description);
    }

    render() {
        return (
            <Search state={this.props.state} doSearch={this.doSearch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.searchReducer,
    search: state.commonReducer.searchReducer
});

export default compose(
    connect(mapStateToProps, {setSearchStateThunkCreator, setSearchTextActionCreator}),
    withRouter)(SearchContainer);