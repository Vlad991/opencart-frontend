import React from 'react';
import {connect} from "react-redux";
import Account from "./Account";
import {setAccountStateThunkCreator} from "../../../redux/account/account-reducer";

class AccountContainer extends React.Component {
    componentDidMount() {
        this.props.setAccountStateThunkCreator();
    };

    render() {
        return (
            <Account state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.accountReducer
});

export default connect(mapStateToProps, {setAccountStateThunkCreator})(AccountContainer);