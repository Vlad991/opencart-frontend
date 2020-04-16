import React from 'react';
import {setCurrencyActionCreator} from "../../redux/common/currency-reducer";

const Currency = (props) => {
    let setCurrency = (code) => {
        props.dispatch(setCurrencyActionCreator(code));
    };
    if (props.state.currencies.length > 1) {
        return (
            <div className={'pull-left'}>
                <form action={props.state.action} method="post" encType="multipart/form-data" id="form-currency">
                    <div className="btn-group">
                        <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                            {props.state.currencies.map(currency => {
                                if (currency.symbol_left && currency.code === props.state.code) {
                                    return (
                                        <strong key={currency.code}>{currency.symbol_left}</strong>
                                    );
                                } else if (currency.symbol_right && currency.code === props.state.code) {
                                    return (
                                        <strong>{currency.symbol_right}</strong>
                                    );
                                } else {
                                    return null;
                                }
                            })} <span className="hidden-xs hidden-sm hidden-md">{props.state.text_currency}</span>&nbsp;<i className="fa fa-caret-down"></i>
                        </button>
                        <ul className="dropdown-menu">
                            {props.state.currencies.map(currency => {
                                if (currency.symbol_left) {
                                    return (
                                        <li key={currency.code}>
                                            <button className="currency-select btn btn-link btn-block" type="button" name={currency.code} onClick={() => setCurrency(currency.code)}>{currency.symbol_left} {currency.title}</button>
                                        </li>
                                    );
                                } else if (currency.symbol_right && currency.code === props.state.code) {
                                    return (
                                        <li key={currency.code}>
                                            <button className="currency-select btn btn-link btn-block" type="button" name={currency.code} onClick={() => setCurrency(currency.code)}>{currency.symbol_right} {currency.title}</button>
                                        </li>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </ul>
                    </div>
                    <input type="hidden" name="code" value=""/>
                    <input type="hidden" name="redirect" value={props.state.redirect}/>
                </form>
            </div>
        );
    } else {
        return '';
    }
};

export default Currency;