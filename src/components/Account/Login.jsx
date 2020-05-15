import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Redirect} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../Common/ColumnLeft";
import ContentTop from "../Common/ContentTop";
import ContentBottom from "../Common/ContentBottom";
import ColumnRight from "../Common/ColumnRight";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    let stateLogin = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="account-login" className="container">
            <ul className="breadcrumb">
                {stateLogin.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateLogin.success ? <div className="alert alert-success alert-dismissible"><i className="fa fa-check-circle"></i> {stateLogin.success}</div> : ''}
            {stateLogin.error_warning ? <div className="alert alert-danger alert-dismissible"><i className="fa fa-exclamation-circle"></i> {stateLogin.error_warning}</div> : ''}
            <div className="row">
                {stateLogin.column_left ? <ColumnLeft state={stateLogin.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateLogin.content_top ? <ContentTop state={stateLogin.content_top}/> : ''}
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="well">
                                <h2>{stateLogin.text_new_customer}</h2>
                                <p><strong>{stateLogin.text_register}</strong></p>
                                <p>{stateLogin.text_register_account}</p>
                                <a href={stateLogin.register} className="btn btn-primary">{stateLogin.button_continue}</a></div>
                        </div>
                        <div className="col-sm-6">
                            <div className="well">
                                <h2>{stateLogin.text_returning_customer}</h2>
                                <p><strong>{stateLogin.text_i_am_returning_customer}</strong></p>
                                <LoginReduxForm onSubmit={props.doLogin} state={props.state}/>
                            </div>
                        </div>
                    </div>
                    {stateLogin.content_bottom ? <ContentBottom state={stateLogin.content_bottom}/> : ''}
                </div>
                {stateLogin.column_right ? <ColumnRight state={stateLogin.column_right}/> : ''}
            </div>
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label className="control-label" htmlFor="input-email">{props.state.entry_email}</label>
                <Field component="input" type="text" name="email" value={props.state.email} placeholder={props.state.entry_email} id="input-email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label" htmlFor="input-password">{props.state.entry_password}</label>
                <Field component="input" type="password" name="password" value={props.state.password} placeholder={props.state.entry_password} id="input-password" className="form-control"/>
                <NavLink to={props.state.forgotten}>{props.state.text_forgotten}</NavLink></div>
            <input type="submit" value={props.state.button_login} className="btn btn-primary"/>
            {props.state.redirect ? <input type="hidden" name="redirect" value={props.state.redirect}/> : ''}
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'do-login'})(LoginForm);

export default Login;