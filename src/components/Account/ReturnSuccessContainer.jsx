import React from 'react';
import {connect} from "react-redux";
import Success from "../Common/Success";
import {setReturnSuccessStateThunkCreator} from "../../redux/account/return-success-reducer";

class ReturnSuccessContainer extends React.Component {
    componentDidMount() {
        this.props.setReturnSuccessStateThunkCreator();
    };

    render() {
        return (
            <Success state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.returnSuccessReducer
});

export default connect(mapStateToProps, {setReturnSuccessStateThunkCreator})(ReturnSuccessContainer);