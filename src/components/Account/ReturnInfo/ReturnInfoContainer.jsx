import React from 'react';
import {connect} from "react-redux";
import ReturnInfo from "./ReturnInfo";
import {setReturnInfoStateThunkCreator} from "../../../redux/account/return-info-reducer";
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";

class ReturnInfoContainer extends React.Component {
    componentDidMount() {
        this.props.setReturnInfoStateThunkCreator(this.props.match.params.id);
    };

    render() {
        return (
            <ReturnInfo state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.returnInfoReducer
});

export default compose(
    connect(mapStateToProps, {setReturnInfoStateThunkCreator}),
    withRouter)(ReturnInfoContainer);