import React from 'react';
import {connect} from "react-redux";
import Register from "./Register";
import {doRegisterThunkCreator, setRegisterStateThunkCreator} from "../../../redux/account/register-reducer";

class RegisterContainer extends React.Component {
    componentDidMount() {
        this.props.setRegisterStateThunkCreator();
    };

    doRegister = (values) => {
        this.props.doRegisterThunkCreator(values);
    };

    render() {
        return (
            <Register state={this.props.state} doRegister={this.doRegister}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.registerReducer
});

export default connect(mapStateToProps, {setRegisterStateThunkCreator, doRegisterThunkCreator})(RegisterContainer);