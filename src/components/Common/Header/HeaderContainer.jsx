import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setHeaderStateThunkCreator} from "../../../redux/common/header-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setHeaderStateThunkCreator();
    }

    render() {
        return (
            <Header state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer,
    isFetching: state.opencartReducer.headerIsFetching
});

export default connect(mapStateToProps, {setHeaderStateThunkCreator})(HeaderContainer);