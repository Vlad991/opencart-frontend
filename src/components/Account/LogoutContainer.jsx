import React from 'react';
import {connect} from "react-redux";
import Success from "../Common/Success";
import {setLogoutStateThunkCreator} from "../../redux/account/logout-reducer";

class LogoutContainer extends React.Component {
    componentDidMount() {
        this.props.setLogoutStateThunkCreator();
    };

    render() {
        return (
            <Success state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.logoutReducer
});

export default connect(mapStateToProps, {setLogoutStateThunkCreator})(LogoutContainer);