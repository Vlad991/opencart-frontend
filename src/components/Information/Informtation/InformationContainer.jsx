import React from 'react';
import {connect} from "react-redux";
import Information from "./Information";
import {setInformationStateThunkCreator} from "../../../redux/information/information-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class InformationContainer extends React.Component {
    componentDidMount() {
        this.props.setInformationStateThunkCreator(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.setInformationStateThunkCreator(this.props.match.params.id);
        }
    }

    render() {
        return (
            <Information state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.informationReducer
});

export default compose(
    connect(mapStateToProps, {setInformationStateThunkCreator}),
    withRouter)(InformationContainer);