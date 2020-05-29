import React from 'react';
import {connect} from "react-redux";
import Success from "../../Common/Success";
import {setContactSuccessStateThunkCreator} from "../../../redux/information/contact-success-reducer";

class ContactSuccessContainer extends React.Component {
    componentDidMount() {
        this.props.setContactSuccessStateThunkCreator();
    }

    render() {
        return (
            <Success state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.contactSuccessReducer
});

export default connect(mapStateToProps, {setContactSuccessStateThunkCreator})(ContactSuccessContainer);