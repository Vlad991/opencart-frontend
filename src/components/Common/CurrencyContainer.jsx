import React from 'react';
import {connect} from "react-redux";
import Currency from "./Currency";
import {commonAPI} from "../../api/api";
import {setStateActionCreator} from "../../redux/common/currency-reducer";

class CurrencyContainer extends React.Component {
    componentDidMount() {
        commonAPI.getCurrency().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Currency state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.currencyReducer
});

export default connect(mapStateToProps, {setStateActionCreator})(CurrencyContainer);