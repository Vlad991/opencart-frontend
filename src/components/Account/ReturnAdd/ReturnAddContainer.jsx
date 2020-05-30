import React from 'react';
import {connect} from "react-redux";
import ReturnForm from "./ReturnForm";
import {addReturnThunkCreator, setReturnAddStateThunkCreator} from "../../../redux/account/return-add-reducer";

class ReturnAddContainer extends React.Component {
    componentDidMount() {
        this.props.setReturnAddStateThunkCreator();
    };

    addReturn = (values) => {
        this.props.addReturnThunkCreator(values);
    };

    render() {
        return (
            <ReturnForm addReturn={this.addReturn} state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.returnAddReducer
});

export default connect(mapStateToProps, {setReturnAddStateThunkCreator, addReturnThunkCreator})(ReturnAddContainer);