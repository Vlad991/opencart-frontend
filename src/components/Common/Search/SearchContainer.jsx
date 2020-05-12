import React from 'react';
import {connect} from "react-redux";
import Search from "./Search";
import {commonAPI} from "../../../api/api";
import {setStateActionCreator, setSearchTextActionCreator} from "../../../redux/common/search-reducer";

class SearchContainer extends React.Component {
    componentDidMount() {
        commonAPI.getSearch().then(data => {
            this.props.setStateActionCreator(data);
        });
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

export default connect(mapStateToProps, {setStateActionCreator, setSearchTextActionCreator})(SearchContainer);