import React from 'react';
import {connect} from "react-redux";
import Register from "./Register";
import {setRegisterStateThunkCreator} from "../../redux/account/register-reducer";

class RegisterContainer extends React.Component {
    componentDidMount() {
        this.props.setRegisterStateThunkCreator();
    }

    render() {
        return (
            <Register state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.registerReducer
});

export default connect(mapStateToProps, {setRegisterStateThunkCreator})(RegisterContainer);