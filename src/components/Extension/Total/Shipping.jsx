import React from "react";

const Shipping = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title"><a href="#collapse-shipping" className="accordion-toggle" data-toggle="collapse" data-parent="#accordion">{props.state.heading_title} <i className="fa fa-caret-down"></i></a></h4>
            </div>
            <div id="collapse-shipping" className="panel-collapse collapse">
                <div className="panel-body">
                    <p>{props.state.text_shipping}</p>
                    <div className="form-horizontal">
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" htmlFor="input-country">{props.state.entry_country}</label>
                            <div className="col-sm-10">
                                <select name="country_id" id="input-country" className="form-control">
                                    <option value="">{props.state.text_select}</option>
                                    {props.state.countries.map(country => {
                                        if (country.country_id === props.state.country_id) {
                                            return <option value={country.country_id} selected="selected">{country.name}</option>
                                        } else {
                                            return <option value={country.country_id}>{country.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" htmlFor="input-zone">{props.state.entry_zone}</label>
                            <div className="col-sm-10">
                                <select name="zone_id" id="input-zone" className="form-control">
                                </select>
                            </div>
                        </div>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" htmlFor="input-postcode">{props.state.entry_postcode}</label>
                            <div className="col-sm-10">
                                <input type="text" name="postcode" value={props.state.postcode} placeholder={props.state.entry_postcode} id="input-postcode" className="form-control"/>
                            </div>
                        </div>
                        <button type="button" id="button-quote" data-loading-text={props.state.text_loading} className="btn btn-primary">{props.state.button_quote}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipping;