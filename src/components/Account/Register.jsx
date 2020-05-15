import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Redirect} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../Common/ColumnLeft";
import ContentTop from "../Common/ContentTop";
import ContentBottom from "../Common/ContentBottom";
import ColumnRight from "../Common/ColumnRight";
import {Field, reduxForm} from "redux-form";

const Register = (props) => {
    let stateRegister = props.state;

    if (stateRegister.doSuccessRedirect) {
        return <Redirect to="/account/success"/>
    }

    let classVal;
    if (stateRegister.column_left && stateRegister.column_right) {
        classVal = 'col-sm-6';
    } else if (stateRegister.column_left || stateRegister.column_right) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="account-register" className="container">
            <ul className="breadcrumb">
                {stateRegister.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateRegister.error_warning ?
                <div className="alert alert-danger alert-dismissible"><i className="fa fa-exclamation-circle"></i> {stateRegister.error_warning}</div> : ''}
            <div className="row">
                {stateRegister.column_left ? <ColumnLeft state={stateRegister.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateRegister.content_top ? <ContentTop state={stateRegister.content_top}/> : ''}
                    <h1>{stateRegister.heading_title}</h1>
                    <p>{ReactHtmlParser(stateRegister.text_account_already)}</p>
                    <RegisterReduxForm onSubmit={props.doRegister} state={props.state}/>
                    {stateRegister.content_bottom ? <ContentBottom state={stateRegister.content_bottom}/> : ''}
                </div>
                {stateRegister.column_right ? <ColumnRight state={stateRegister.column_right}/> : ''}
            </div>
        </div>
    )
};

const RegisterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action={props.state.action} method="post" encType="multipart/form-data" className="form-horizontal">
            <fieldset id="account">
                <legend>{props.state.text_your_details}</legend>
                <div className="form-group required" style={{display: props.state.customer_groups.length > 1 ? 'block' : 'none'}}>
                    <label className="col-sm-2 control-label">{props.state.entry_customer_group}</label>
                    <div className="col-sm-10">
                        {props.state.customer_groups.map(customer_group => {
                            if (customer_group.customer_group_id == props.state.customer_group_id)
                                return (
                                    <div className="radio">
                                        <label>
                                            <Field component="input" type="radio" name="customer_group_id" value={customer_group.customer_group_id} checked="checked"/>
                                            {customer_group.name}
                                        </label>
                                    </div>
                                )
                            else
                                return (
                                    <div className="radio">
                                        <label>
                                            <Field component="input" type="radio" name="customer_group_id" value={customer_group.customer_group_id}/>
                                            {customer_group.name}
                                        </label>
                                    </div>
                                )
                        })}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_firstname ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-firstname">{props.state.entry_firstname}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="firstname" value={props.state.firstname} placeholder={props.state.entry_firstname} id="input-firstname" className="form-control"/>
                        {props.state.error_firstname ? <div className="text-danger">{props.state.error_firstname}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_lastname ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-lastname">{props.state.entry_lastname}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="lastname" value={props.state.lastname} placeholder={props.state.entry_lastname} id="input-lastname" className="form-control"/>
                        {props.state.error_lastname ? <div className="text-danger">{props.state.error_lastname}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_email ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-email">{props.state.entry_email}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="email" name="email" value={props.state.email} placeholder={props.state.entry_email} id="input-email" className="form-control"/>
                        {props.state.error_email ? <div className="text-danger">{props.state.error_email}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_telephone ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-telephone">{props.state.entry_telephone}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="tel" name="telephone" value={props.state.telephone} placeholder={props.state.entry_telephone} id="input-telephone" className="form-control"/>
                        {props.state.error_telephone ? <div className="text-danger">{props.state.error_telephone}</div> : ''}
                    </div>
                </div>
                {props.state.custom_fields.map(custom_field => {
                    if (custom_field.type == 'select') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <select name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} id={"input-custom-field" + custom_field.custom_field_id} className="form-control">
                                        <option value="">{props.state.text_select}</option>
                                        {custom_field.custom_field_value.map(custom_field_value => {
                                            if (props.state.register_custom_field[custom_field.location][custom_field.custom_field_id] && (custom_field_value.custom_field_value_id == props.state.register_custom_field[custom_field.custom_field_id]))
                                                return (
                                                    <option value={custom_field_value.custom_field_value_id} selected="selected">{custom_field_value.name}</option>
                                                )
                                            else
                                                return (
                                                    <option value={custom_field_value.custom_field_value_id}>{custom_field_value.name}</option>
                                                )
                                        })}
                                    </select>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'radio') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label">{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <div>
                                        {custom_field.custom_field_value.map(custom_field_value => {
                                            return (
                                                <div className="radio">
                                                    {props.state.register_custom_field[custom_field.custom_field_id] && (custom_field_value.custom_field_value_id == props.state.register_custom_field[custom_field.custom_field_id]) ?
                                                        <label>
                                                            <Field component="input" type="radio" name={"custom_field" + "[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={custom_field_value.custom_field_value_id} checked="checked"/>
                                                            {custom_field_value.name}
                                                        </label> :
                                                        <label>
                                                            <Field component="input" type="radio" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={custom_field_value.custom_field_value_id}/>
                                                            {custom_field_value.name}
                                                        </label>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'checkbox') {
                        return (
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label">{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <div>
                                        {custom_field.custom_field_value.map(custom_field_value => {
                                            return (
                                                <div className="checkbox">
                                                    {props.state.register_custom_field[custom_field.custom_field_id] && (custom_field_value.custom_field_value_id.includes(props.state.register_custom_field[custom_field.custom_field_id])) ?
                                                        <label>
                                                            <Field component="input" type="checkbox" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "][]"} value={custom_field_value.custom_field_value_id} checked="checked"/>
                                                            {custom_field_value.name}
                                                        </label> :
                                                        <label>
                                                            <Field component="input" type="checkbox" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "][]"} value={custom_field_value.custom_field_value_id}/>
                                                            {custom_field_value.name}
                                                        </label>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'text') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label" htmlFor={"input-custom-field" + custom_field.custom_field_id}>{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <Field component="input" type="text" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={props.state.register_custom_field[custom_field.custom_field_id] ? props.state.register_custom_field[custom_field.custom_field_id] : custom_field.value} placeholder={custom_field.name} id={"input-custom-field" + custom_field.custom_field_id} className="form-control"/>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'textarea') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label" htmlFor={"input-custom-field" + custom_field.custom_field_id}>{custom_field.name}</label>
                                <div className="col-sm-10">
                                                <textarea name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} rows="5" placeholder={custom_field.name} id={"input-custom-field" + custom_field.custom_field_id} className="form-control">
                                                    {props.state.register_custom_field[custom_field.custom_field_id] ? props.state.register_custom_field[custom_field.custom_field_id] : custom_field.value}
                                                </textarea>
                                    {props.state.error_custom_field[custom_field.custom_field_id ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : '']}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'file') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label">{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <button type="button" id={"button-custom-field" + custom_field.custom_field_id} data-loading-text={props.state.text_loading} className="btn btn-default"><i className="fa fa-upload"></i> {props.state.button_upload}</button>
                                    <Field component="input" type="hidden" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={props.state.register_custom_field[custom_field.custom_field_id] ? props.state.register_custom_field[custom_field.custom_field_id] : ''}/>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'date') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label" htmlFor={"input-custom-field" + custom_field.custom_field_id}>{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <div className="input-group date">
                                        <Field type="text" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={props.state.register_custom_field[custom_field.custom_field_id] ? props.state.register_custom_field[custom_field.custom_field_id] : custom_field.value} placeholder={custom_field.name} data-date-format="YYYY-MM-DD" id={"input-custom-field" + custom_field.custom_field_id} className="form-control"/>
                                        <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                                                    </span>
                                    </div>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'time') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label" htmlFor={"input-custom-field" + custom_field.custom_field_id}>{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <div className="input-group time">
                                        <Field component="input" type="text" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={props.state.register_custom_field[custom_field.custom_field_id] ? props.state.register_custom_field[custom_field.custom_field_id] : custom_field.value} placeholder={custom_field.name} data-date-format="HH:mm" id={"input-custom-field" + custom_field.custom_field_id} className="form-control"/>
                                        <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                                                    </span>
                                    </div>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                    if (custom_field.type == 'datetime') {
                        return (
                            <div id={"custom-field" + custom_field.custom_field_id} className="form-group custom-field" data-sort={custom_field.sort_order}>
                                <label className="col-sm-2 control-label" htmlFor={"input-custom-field" + custom_field.custom_field_id}>{custom_field.name}</label>
                                <div className="col-sm-10">
                                    <div className="input-group datetime">
                                        <Field component="input" type="text" name={"custom_field[" + custom_field.location + "][" + custom_field.custom_field_id + "]"} value={props.state.register_custom_field[custom_field.custom_field_id] ? props.state.register_custom_field[custom_field.custom_field_id] : custom_field.value} placeholder={custom_field.name} data-date-format="YYYY-MM-DD HH:mm" id={"input-custom-field" + custom_field.custom_field_id} className="form-control"/>
                                        <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                                                    </span>
                                    </div>
                                    {props.state.error_custom_field[custom_field.custom_field_id] ? <div className="text-danger">{props.state.error_custom_field[custom_field.custom_field_id]}</div> : ''}
                                </div>
                            </div>
                        )
                    }
                })}
            </fieldset>
            <fieldset>
                <legend>{props.state.text_your_password}</legend>
                <div className={"form-group required " + (props.state.error_password ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-password">{props.state.entry_password}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="password" name="password" value={props.state.password} placeholder={props.state.entry_password} id="input-password" className="form-control"/>
                        {props.state.error_password ? <div className="text-danger">{props.state.error_password}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_confirm ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-confirm">{props.state.entry_confirm}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="password" name="confirm" value={props.state.confirm} placeholder={props.state.entry_confirm} id="input-confirm" className="form-control"/>
                        {props.state.error_confirm ? <div className="text-danger">{props.state.error_confirm}</div> : ''}
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>{props.state.text_newsletter}</legend>
                <div className="form-group">
                    <label className="col-sm-2 control-label">{props.state.entry_newsletter}</label>
                    <div className="col-sm-10">
                        {props.state.newsletter ?
                            <>
                                <label className="radio-inline">
                                    <Field component="input" type="radio" name="newsletter" value="1" checked="checked"/>
                                    {props.state.text_yes}
                                </label>
                                <label className="radio-inline">
                                    <Field component="input" type="radio" name="newsletter" value="0"/>
                                    {props.state.text_no}
                                </label>
                            </> :
                            <>
                                <label className="radio-inline">
                                    <Field component="input" type="radio" name="newsletter" value="1"/>
                                    {props.state.text_yes}
                                </label>
                                <label className="radio-inline">
                                    <Field component="input" type="radio" name="newsletter" value="0" checked="checked"/>
                                    {props.state.text_no}
                                </label>
                            </>}
                    </div>
                </div>
            </fieldset>
            {props.state.captcha}
            {props.state.text_agree ?
                <div className="buttons">
                    <div className="pull-right">
                        {ReactHtmlParser(props.state.text_agree)} {props.state.agree ? <Field component="input" type="checkbox" name="agree" value="1" checked="checked"/> : <Field component="input" type="checkbox" name="agree" value="1"/>} &nbsp; <input type="submit" value={props.state.button_continue} className="btn btn-primary"/>
                    </div>
                </div> :
                <div className="buttons">
                    <div className="pull-right">
                        <input type="submit" value={props.state.button_continue} className="btn btn-primary"/>
                    </div>
                </div>}
        </form>
    )
};

const RegisterReduxForm = reduxForm({form: 'do-register'})(RegisterForm);

export default Register;