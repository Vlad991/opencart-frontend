import React from 'react';
import {connect} from "react-redux";
import Search from "./Search";
import {setSearchStateThunkCreator, setSearchTextActionCreator} from "../../../redux/common/search-reducer";

class SearchContainer extends React.Component {
    componentDidMount() {
        this.props.setSearchStateThunkCreator();
    }

    render() {
        return (
            <Search setSearchText={this.props.setSearchTextActionCreator} state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.searchReducer
});

export default connect(mapStateToProps, {setSearchStateThunkCreator, setSearchTextActionCreator})(SearchContainer);