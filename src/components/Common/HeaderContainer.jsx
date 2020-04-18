import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {commonAPI} from "../../api/api";
import {setStateActionCreator} from "../../redux/common/header-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        commonAPI.getHeader().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Header state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(HeaderContainer);