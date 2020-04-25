import React from 'react';
import {connect} from "react-redux";
import Contact from "./Contact";
import {informationAPI} from "../../../api/api";
import {setStateActionCreator} from "../../../redux/information/contact-reducer";

class ContactContainer extends React.Component {
    componentDidMount() {
        informationAPI.getContact().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Contact state={this.props.state} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.contactReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(ContactContainer);