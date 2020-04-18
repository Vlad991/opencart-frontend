import React from 'react';
import {connect} from "react-redux";
import Information from "./Information";
import {informationAPI} from "../../api/api";
import {setStateActionCreator} from "../../redux/information/information-reducer";

class InformationContainer extends React.Component {
    componentDidMount() {
        informationAPI.getInformation(this.props.id).then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Information state={this.props.state} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.informationReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(InformationContainer);