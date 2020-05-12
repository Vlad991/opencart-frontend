import React from 'react';
import {connect} from "react-redux";
import Currency from "./Currency";
import {setCurrencyStateThunkCreator, setCurrencyThunkCreator} from "../../../redux/common/currency-reducer";

class CurrencyContainer extends React.Component {
    componentDidMount() {
        this.props.setCurrencyStateThunkCreator();
    }

    setCurrency = (code) => {
        this.props.setCurrencyThunkCreator(code);
    }

    render() {
        return (
            <Currency setCurrency={this.setCurrency} state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.currencyReducer
});

export default connect(mapStateToProps, {setCurrencyStateThunkCreator, setCurrencyThunkCreator})(CurrencyContainer);