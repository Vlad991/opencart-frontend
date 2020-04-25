import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import {commonAPI} from "../../../api/api";
import {setStateActionCreator} from "../../../redux/common/home-reducer";

class HomeContainer extends React.Component {
    componentDidMount() {
        commonAPI.getHome().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Home state={this.props.state.commonReducer.homeReducer} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {setStateActionCreator})(HomeContainer);