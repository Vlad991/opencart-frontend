import React from 'react';
import {connect} from "react-redux";
import Currency from "./Currency";
import {commonAPI} from "../../../api/api";
import {setStateActionCreator, setCurrencyActionCreator} from "../../../redux/common/currency-reducer";

class CurrencyContainer extends React.Component {
    componentDidMount() {
        commonAPI.getCurrency().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    setCurrency(code) {
        commonAPI.setCurrency(this.state.action, code).then(data => {
            console.log(data);
            setCurrencyActionCreator(data);
        });
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

export default connect(mapStateToProps, {setStateActionCreator, setCurrencyActionCreator})(CurrencyContainer);