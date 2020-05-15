import React from 'react';
import {connect} from "react-redux";
import Success from "../Common/Success";
import {setSuccessStateThunkCreator} from "../../redux/account/success-reducer";

class SuccessContainer extends React.Component {
    componentDidMount() {
        this.props.setSuccessStateThunkCreator();
    };

    render() {
        return (
            <Success state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.successReducer
});

export default connect(mapStateToProps, {setSuccessStateThunkCreator})(SuccessContainer);