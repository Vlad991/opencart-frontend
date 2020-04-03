import React from 'react';
import '../../javascript/bootstrap/css/bootstrap.css';
import '../../stylesheet/stylesheet.css';

const Currency = (props) => {

    props = {
        currency: {}
    };

    return (
        // {% if currencies|length > 1 %}
        <div className={'pull-left'}>
            <form action={props.action} method="post" enctype="multipart/form-data" id="form-currency">
                <div className="btn-group">
                    <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                        {/*{% for currency in currencies %}*/}
                        {/*{% if currency.symbol_left and currency.code == code %}*/}
                        <strong>{props.currency.symbol_left}</strong>
                        {/*{% elseif currency.symbol_right and currency.code == code %} */}
                        <strong>{props.currency.symbol_right}</strong>
                        {/*{% endif %}*/}
                        {/*{% endfor %} */}
                        <span className="hidden-xs hidden-sm hidden-md">{props.text_currency}</span>&nbsp;<i className="fa fa-caret-down"></i>
                    </button>
                    <ul className="dropdown-menu">
                        {/*{% for currency in currencies %}*/}
                        {/*{% if currency.symbol_left %}*/}
                        <li>
                            <button className="currency-select btn btn-link btn-block" type="button" name={ props.currency.code }>{props.currency.symbol_left} {props.currency.title}</button>
                        </li>
                        {/*{% else %}*/}
                        <li>
                            <button className="currency-select btn btn-link btn-block" type="button" name={ props.currency.code }>{props.currency.symbol_right} {props.currency.title}</button>
                        </li>
                        {/*{% endif %}*/}
                        {/*{% endfor %}*/}
                    </ul>
                </div>
                <input type="hidden" name="code" value=""/>
                <input type="hidden" name="redirect" value={ props.redirect }/>
            </form>
        </div>
        // {% endif %}
    )
};

export default Currency;