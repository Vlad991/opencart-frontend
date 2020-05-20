import React from 'react';
import {connect} from "react-redux";
import Search from "./Search";
import {doSearchRedirectActionCreator, setSearchStateThunkCreator, setSearchTextActionCreator} from "../../../redux/common/search-reducer";
import Redirect from "react-router-dom/es/Redirect";

class SearchContainer extends React.Component {
    componentDidMount() {
        this.props.setSearchStateThunkCreator();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.state.doRedirect && prevProps.state.doRedirect) || (this.props.state.doRedirect && !prevProps.state.doRedirect)) {
            this.props.doSearchRedirectActionCreator(false);
        }
    };

    onChange = (e) => {
        this.props.setSearchTextActionCreator(e.target.value);
    };

    onSubmit = () => {
        this.props.doSearchRedirectActionCreator(true);
    };

    render() {
        if (this.props.state.doRedirect) {
            return <Redirect to={"/product/search/" + this.props.state.search}/>
        }

        return (
            <Search setSearchText={this.props.setSearchTextActionCreator} state={this.props.state} onChange={this.onChange} onSubmit={this.onSubmit}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.searchReducer
});

export default connect(mapStateToProps, {setSearchStateThunkCreator, setSearchTextActionCreator, doSearchRedirectActionCreator})(SearchContainer);