import React from 'react';
import {connect} from "react-redux";
import Contact from "./Contact";
import {setContactStateThunkCreator} from "../../../redux/information/contact-reducer";

class ContactContainer extends React.Component {
    componentDidMount() {
        this.props.setContactStateThunkCreator();
    }

    render() {
        return (
            <Contact state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.contactReducer
});

export default connect(mapStateToProps, {setContactStateThunkCreator})(ContactContainer);