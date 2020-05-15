import React from 'react';
import {connect} from "react-redux";
import Information from "./Information";
import {setInformationStateThunkCreator} from "../../../redux/information/information-reducer";

class InformationContainer extends React.Component {
    componentDidMount() {
        this.props.setInformationStateThunkCreator(this.props.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id !== prevProps.id) {
            this.props.setInformationStateThunkCreator(this.props.id);
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

export default connect(mapStateToProps, {setInformationStateThunkCreator})(InformationContainer);