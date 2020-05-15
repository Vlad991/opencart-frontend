import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import {setHeaderStateThunkCreator} from "../../../redux/common/home-reducer";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.setHeaderStateThunkCreator();
    }

    render() {
        return (
            <Home state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.homeReducer
});

export default connect(mapStateToProps, {setHeaderStateThunkCreator})(HomeContainer);