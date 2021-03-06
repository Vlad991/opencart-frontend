import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ColumnRight from "../../Common/ColumnRight";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import {NavLink, Redirect} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {Field, reduxForm} from "redux-form";

const Contact = (props) => {
    let stateContact = props.state;

    if (stateContact.doSuccessRedirect) {
        return <Redirect to="/information/contact/success"/>
    }

    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="information-contact" className="container">
            <ul className="breadcrumb">
                {stateContact.breadcrumbs.map(breadcrumb => {
                    return <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>
                })}
            </ul>
            <div className="row">
                {stateContact.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateContact.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h1>{stateContact.heading_title}</h1>
                    <h3>{stateContact.text_location}</h3>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="row">
                                {stateContact.image ? <div className="col-sm-3"><img src={stateContact.image} alt={stateContact.store} title={stateContact.store} className="img-thumbnail"/></div> : ''}
                                <div className="col-sm-3"><strong>{stateContact.store}</strong><br/>
                                    <address>
                                        {stateContact.address}
                                    </address>
                                    {stateContact.geocode ? <a href={'https://maps.google.com/maps?q=' + encodeURI(stateContact.geocode) + '&hl=' + stateContact.geocode_hl + '&t=m&z=15'} target="_blank" rel="noopener noreferrer" className="btn btn-info"><i className="fa fa-map-marker"></i> {stateContact.button_map}</a> : ''}
                                </div>
                                <div className="col-sm-3"><strong>{stateContact.text_telephone}</strong><br/>
                                    {stateContact.telephone}<br/>
                                    <br/>
                                    {stateContact.fax ? [<strong>{stateContact.text_fax}</strong>, <br/>, stateContact.fax] : ''}
                                </div>
                                <div className="col-sm-3">
                                    {stateContact.open ? [
                                        <strong>{stateContact.text_open}</strong>,
                                        <br/>,
                                        stateContact.open,
                                        <br/>
                                    ] : ''}
                                    {stateContact.comment ? [
                                        <strong>{stateContact.text_comment}</strong>,
                                        <br/>,
                                        stateContact.comment
                                    ] : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    {stateContact.locations && stateContact.locations.length > 0 ? [
                        <h3>{stateContact.text_store}</h3>,
                        <div className="panel-group" id="accordion">
                            {stateContact.locations.map(location => {
                                return (
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><a href={'#collapse-location' + location.location_id} className="accordion-toggle" data-toggle="collapse" data-parent="#accordion">{location.name} <i className="fa fa-caret-down"></i></a></h4>
                                        </div>
                                        <div className="panel-collapse collapse" id="collapse-location{{ location.location_id }}">
                                            <div className="panel-body">
                                                <div className="row">
                                                    {location.image ? <div className="col-sm-3"><img src={location.image} alt={location.name} title={location.name} className="img-thumbnail"/></div> : ''}
                                                    <div className="col-sm-3">
                                                        <strong>{location.name}</strong><br/>
                                                        <address>
                                                            {location.addres}
                                                        </address>
                                                        {location.geocode ? <a href="https://maps.google.com/maps?q={{ location.geocode|url_encode }}&hl={{ geocode_hl }}&t=m&z=15" target="_blank" rel="noopener noreferrer" className="btn btn-info"><i className="fa fa-map-marker"></i> {stateContact.button_map}</a> : ''}
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <strong>{stateContact.text_telephone}</strong><br/>
                                                        {location.telephone}<br/>
                                                        <br/>
                                                        {location.fax ? [<strong>{stateContact.text_fax}</strong>, <br/>, location.fax] : ''}
                                                    </div>
                                                    <div className="col-sm-3">
                                                        {location.open ? [<strong>{stateContact.text_open}</strong>, <br/>, location.open, <br/>, <br/>] : ''}
                                                        {location.comment ? [<strong>{stateContact.text_comment}</strong>, <br/>, location.comment] : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ] : ''}
                    <ContactReduxForm onSubmit={props.doContact} state={props.state}/>
                    {stateContact.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {stateContact.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

const ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form-horizontal">
            <fieldset>
                <legend>{props.state.text_contact}</legend>
                <div className={"form-group required " + (props.state.error_name ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-name">{props.state.entry_name}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="name" value={props.state.name} id="input-name" className="form-control"/>
                        {props.state.error_name ? <div className="text-danger">{props.state.error_name}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_email ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-email">{props.state.entry_email}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="email" value={props.state.email} id="input-email" className="form-control"/>
                        {props.state.error_email ? <div className="text-danger">{props.state.error_email}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_enquiry ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-enquiry">{props.state.entry_enquiry}</label>
                    <div className="col-sm-10">
                        <Field component="textarea" name="enquiry" rows="10" id="input-enquiry" className="form-control">{props.state.enquiry}</Field>
                        {props.state.error_enquiry ? <div className="text-danger">{props.state.error_enquiry}</div> : ''}
                    </div>
                </div>
                {props.state.captcha}
            </fieldset>
            <div className="buttons">
                <div className="pull-right">
                    <input className="btn btn-primary" type="submit" value={props.state.button_submit}/>
                </div>
            </div>
        </form>
    );
};

const ContactReduxForm = reduxForm({form: 'do-contact'})(ContactForm);

export default Contact;