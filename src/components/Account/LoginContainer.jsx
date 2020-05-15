import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {doLoginThunkCreator, setLoginStateThunkCreator} from "../../redux/account/login-reducer";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.setLoginStateThunkCreator();
    };

    doLogin = (values) => {
        this.props.doLoginThunkCreator(values);
    };

    render() {
        return (
            <Login state={this.props.state} doLogin={this.doLogin}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.loginReducer
});

export default connect(mapStateToProps, {setLoginStateThunkCreator, doLoginThunkCreator})(LoginContainer);