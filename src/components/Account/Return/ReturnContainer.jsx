import React from 'react';
import {connect} from "react-redux";
import ReturnList from "./ReturnList";
import {setReturnStateThunkCreator} from "../../../redux/account/return-reducer";

class ReturnContainer extends React.Component {
    componentDidMount() {
        this.props.setReturnStateThunkCreator();
    };

    render() {
        return (
            <ReturnList state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.returnReducer
});

export default connect(mapStateToProps, {setReturnStateThunkCreator})(ReturnContainer);