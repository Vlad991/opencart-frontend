import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {Field, reduxForm} from "redux-form";

const ReturnForm = (props) => {
    let stateReturnForm = props.state;

    if (stateReturnForm.doSuccessRedirect) {
        return <Redirect to="/account/return/success"/>
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
        <div id="account-return" className="container">
            <ul className="breadcrumb">
                {stateReturnForm.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateReturnForm.error_warning ?
                <div className="alert alert-danger alert-dismissible"><i className="fa fa-exclamation-circle"></i> {stateReturnForm.error_warning}</div> : ''}
            <div className="row">
                {stateReturnForm.column_left ? <ColumnLeft state={stateReturnForm.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateReturnForm.content_top ? <ContentTop state={stateReturnForm.content_top}/> : ''}
                    <h1>{stateReturnForm.heading_title}</h1>
                    <p>{stateReturnForm.text_description}</p>
                    <ReturnAddReduxForm onSubmit={props.addReturn} state={props.state}/>
                    {stateReturnForm.content_bottom ? <ContentBottom state={stateReturnForm.content_bottom}/> : ''}
                </div>
                {stateReturnForm.column_right ? <ColumnRight state={stateReturnForm.column_right}/> : ''}
            </div>
        </div>
    )
};

const ReturnAddForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form-horizontal">
            <fieldset>
                <legend>{props.state.text_order}</legend>
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
                        <Field component="input" type="text" name="email" value={props.state.email} placeholder={props.state.entry_email} id="input-email" className="form-control"/>
                        {props.state.error_email ? <div className="text-danger">{props.state.error_email}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_telephone ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-telephone">{props.state.entry_telephone}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="telephone" value={props.state.telephone} placeholder={props.state.entry_telephone} id="input-telephone" className="form-control"/>
                        {props.state.error_telephone ? <div className="text-danger">{props.state.error_telephone}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_order_id ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-order-id">{props.state.entry_order_id}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="order_id" value={props.state.order_id} placeholder={props.state.entry_order_id} id="input-order-id" className="form-control"/>
                        {props.state.error_order_id ? <div className="text-danger">{props.state.error_order_id}</div> : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="input-date-ordered">{props.state.entry_date_ordered}</label>
                    <div className="col-sm-3">
                        <div className="input-group date">
                            <Field component="input" type="text" name="date_ordered" value={props.state.date_ordered} placeholder={props.state.entry_date_ordered} data-date-format="YYYY-MM-DD" id="input-date-ordered" className="form-control"/>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                            </span>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>{props.state.text_product}</legend>
                <div className={"form-group required " + (props.state.error_product ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-product">{props.state.entry_product}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="product" value={props.state.product} placeholder={props.state.entry_product} id="input-product" className="form-control"/>
                        {props.state.error_product ? <div className="text-danger">{props.state.error_product}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_model ? "has-error" : '')}>
                    <label className="col-sm-2 control-label" htmlFor="input-model">{props.state.entry_model}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="model" value={props.state.model} placeholder={props.state.entry_model} id="input-model" className="form-control"/>
                        {props.state.error_product ? <div className="text-danger">{props.state.error_model}</div> : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="input-quantity">{props.state.entry_quantity}</label>
                    <div className="col-sm-10">
                        <Field component="input" type="text" name="quantity" value={props.state.quantity} placeholder={props.state.entry_quantity} id="input-quantity" className="form-control"/>
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_reason ? "has-error" : '')}>
                    <label className="col-sm-2 control-label">{props.state.entry_reason}</label>
                    <div className="col-sm-10">
                        {props.state.return_reasons.map(return_reason => {
                            if (return_reason.return_reason_id === props.state.return_reason_id) {
                                return (
                                    <div className="radio">
                                        <label>
                                            <Field component="input" type="radio" name="return_reason_id" value={return_reason.return_reason_id} checked="checked"/>
                                            {return_reason.name}
                                        </label>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="radio">
                                        <label>
                                            <Field component="input" type="radio" name="return_reason_id" value={return_reason.return_reason_id}/>
                                            {return_reason.name}
                                        </label>
                                    </div>
                                );
                            }
                        })}
                        {props.state.error_reason ? <div className="text-danger">{props.state.error_reason}</div> : ''}
                    </div>
                </div>
                <div className={"form-group required " + (props.state.error_opened ? "has-error" : '')}>
                    <label className="col-sm-2 control-label">{props.state.entry_opened}</label>
                    <div className="col-sm-10">
                        <label className="radio-inline">
                            {props.state.opened ?
                                <Field component="input" type="radio" name="opened" value="1" checked="checked"/> :
                                <Field component="input" type="radio" name="opened" value="1"/>}
                            {props.state.text_yes}
                        </label>
                        <label className="radio-inline">
                            {!props.state.opened ?
                                <Field component="input" type="radio" name="opened" value="0" checked="checked"/> :
                                <Field component="input" type="radio" name="opened" value="0"/>}
                            {props.state.text_no}
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="input-comment">{props.state.entry_fault_detail}</label>
                    <div className="col-sm-10">
                        <Field component="textarea" name="comment" rows="10" placeholder={ props.state.entry_fault_detail } id="input-comment" className="form-control">{props.state.comment}</Field>
                    </div>
                </div>
                {props.state.captcha}
            </fieldset>
            {props.state.text_agree ?
                <div className="buttons clearfix">
                    <div className="pull-left"><NavLink to={props.state.back} className="btn btn-danger">{props.state.button_back}</NavLink></div>
                    <div className="pull-right">
                        {props.state.text_agree}
                        {props.state.agree ?
                            <Field component="input" type="checkbox" name="agree" value="1" checked="checked"/> :
                            <Field component="input" type="checkbox" name="agree" value="1"/>}
                        <input type="submit" value={props.state.button_submit} className="btn btn-primary"/>
                    </div>
                </div> :
                <div className="buttons clearfix">
                    <div className="pull-left"><NavLink to={props.state.back} className="btn btn-default">{props.state.button_back}</NavLink></div>
                    <div className="pull-right">
                        <input type="submit" value={props.state.button_submit} className="btn btn-primary"/>
                    </div>
                </div>}
        </form>
    );
};

const ReturnAddReduxForm = reduxForm({form: 'do-return-add'})(ReturnAddForm);

export default ReturnForm;