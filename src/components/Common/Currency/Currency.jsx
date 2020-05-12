import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, Dropdown} from "react-bootstrap";

const Currency = (props) => {
    if (props.state.currencies.length > 1) {
        return (
            <div className={'pull-left'}>
                <form onSubmit={props.handleSubmit} id="form-currency">
                    <ButtonGroup as={Dropdown}>
                        <Dropdown.Toggle variant="link" data-toggle="dropdown">
                            {props.state.currencies.map(currency => {
                                if (currency.symbol_left && currency.code === props.state.code) {
                                    return (
                                        <strong key={currency.code}>{currency.symbol_left}</strong>
                                    );
                                } else if (currency.symbol_right && currency.code === props.state.code) {
                                    return (
                                        <strong key={currency.code}>{currency.symbol_right}</strong>
                                    );
                                } else {
                                    return null;
                                }
                            })} <span className="hidden-xs hidden-sm hidden-md">{props.state.text_currency}</span>&nbsp;<i className="fa fa-caret-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {props.state.currencies.map(currency => {
                                if (currency.symbol_left) {
                                    return (
                                        <li key={currency.code}>
                                            <button className="currency-select btn btn-link btn-block"
                                                    type="button"
                                                    name={currency.code}
                                                    onClick={() => props.setCurrency(currency.code)}>{currency.symbol_left} {currency.title}</button>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={currency.code}>
                                            <button className="currency-select btn btn-link btn-block"
                                                    type="button"
                                                    name={currency.code}
                                                    onClick={() => props.setCurrency(currency.code)}>{currency.symbol_right} {currency.title}</button>
                                        </li>
                                    );
                                }
                            })}
                        </Dropdown.Menu>
                    </ButtonGroup>
                    {/*<input type={"hidden"} name="code" value=""/>*/}
                    {/*<input type="hidden" name="redirect" value={props.state.redirect}/>*/}
                </form>
            </div>
        );
    } else {
        return '';
    }
};

export default Currency;