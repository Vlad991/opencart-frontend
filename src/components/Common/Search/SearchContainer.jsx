import React from 'react';
import {connect} from "react-redux";
import Search from "./Search";
import {setSearchStateThunkCreator, setSearchTextActionCreator} from "../../../redux/common/search-reducer";

class SearchContainer extends React.Component {
    componentDidMount() {
        this.props.setSearchStateThunkCreator();
    };

    onChange = (e) => {
        this.props.setSearchTextActionCreator(e.target.value);
    };

    onSubmit = () => {
        console.log(this.props.state.search);
    };

    render() {
        return (
            <Search setSearchText={this.props.setSearchTextActionCreator} state={this.props.state} onChange={this.onChange} onSubmit={this.onSubmit}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.searchReducer
});

export default connect(mapStateToProps, {setSearchStateThunkCreator, setSearchTextActionCreator})(SearchContainer);