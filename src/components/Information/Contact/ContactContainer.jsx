import React from 'react';
import {connect} from "react-redux";
import Contact from "./Contact";
import {doContactThunkCreator, setContactStateThunkCreator} from "../../../redux/information/contact-reducer";

class ContactContainer extends React.Component {
    componentDidMount() {
        this.props.setContactStateThunkCreator();
    }

    doContact = (values) => {
        this.props.doContactThunkCreator(values);
    };

    render() {
        return (
            <Contact state={this.props.state} doContact={this.doContact}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.contactReducer
});

export default connect(mapStateToProps, {setContactStateThunkCreator, doContactThunkCreator})(ContactContainer);