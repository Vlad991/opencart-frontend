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
            <Information state={this.props.state.informationReducer.informationReducer} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {setStateActionCreator})(InformationContainer);