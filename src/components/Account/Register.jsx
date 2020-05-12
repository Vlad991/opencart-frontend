import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, Dropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Register = (props) => {
    let stateRegister = props.state;
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
                {stateRegister.breadcrumbs.map(breadcrumb => {
                    return (
                        <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>
                    )
                })}
            </ul>
            {% if error_warning %}
            <div className="alert alert-danger alert-dismissible"><i className="fa fa-exclamation-circle"></i> {{error_warning}}</div>
            {% endif %}
            <div className="row">{{column_left}}
                {% if column_left and column_right %}
                {% set class = 'col-sm-6' %}
                {% elseif column_left or column_right %}
                {% set class = 'col-sm-9' %}
                {% else %}
                {% set class = 'col-sm-12' %}
                {% endif %}
                <div id="content" className="{{ class }}">{{content_top}}
                    <h1>{{heading_title}}</h1>
                    <p>{{text_account_already}}</p>
                    <form action="{{ action }}" method="post" encType="multipart/form-data" className="form-horizontal">
                        <fieldset id="account">
                            <legend>{{text_your_details}}</legend>
                            <div className="form-group required" style="display: {% if customer_groups|length > 1 %} block {% else %} none {% endif %};">
                                <label className="col-sm-2 control-label">{{entry_customer_group}}</label>
                                <div className="col-sm-10">{% for customer_group in customer_groups %}
                                    {% if customer_group.customer_group_id == customer_group_id %}
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="customer_group_id" value="{{ customer_group.customer_group_id }}" checked="checked"/>
                                            {{customer_group.name}}</label>
                                    </div>
                                    {% else %}
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="customer_group_id" value="{{ customer_group.customer_group_id }}"/>
                                            {{customer_group.name}}</label>
                                    </div>
                                    {% endif %}
                                    {% endfor %}</div>
                            </div>
                            <div className="form-group required">
                                <label className="col-sm-2 control-label" htmlFor="input-firstname">{{entry_firstname}}</label>
                                <div className="col-sm-10">
                                    <input type="text" name="firstname" value="{{ firstname }}" placeholder="{{ entry_firstname }}" id="input-firstname" className="form-control"/>
                                    {% if error_firstname %}
                                    <div className="text-danger">{{error_firstname}}</div>
                                    {% endif %} </div>
                            </div>
                            <div className="form-group required">
                                <label className="col-sm-2 control-label" htmlFor="input-lastname">{{entry_lastname}}</label>
                                <div className="col-sm-10">
                                    <input type="text" name="lastname" value="{{ lastname }}" placeholder="{{ entry_lastname }}" id="input-lastname" className="form-control"/>
                                    {% if error_lastname %}
                                    <div className="text-danger">{{error_lastname}}</div>
                                    {% endif %} </div>
                            </div>
                            <div className="form-group required">
                                <label className="col-sm-2 control-label" htmlFor="input-email">{{entry_email}}</label>
                                <div className="col-sm-10">
                                    <input type="email" name="email" value="{{ email }}" placeholder="{{ entry_email }}" id="input-email" className="form-control"/>
                                    {% if error_email %}
                                    <div className="text-danger">{{error_email}}</div>
                                    {% endif %} </div>
                            </div>
                            <div className="form-group required">
                                <label className="col-sm-2 control-label" htmlFor="input-telephone">{{entry_telephone}}</label>
                                <div className="col-sm-10">
                                    <input type="tel" name="telephone" value="{{ telephone }}" placeholder="{{ entry_telephone }}" id="input-telephone" className="form-control"/>
                                    {% if error_telephone %}
                                    <div className="text-danger">{{error_telephone}}</div>
                                    {% endif %} </div>
                            </div>
                            {% for custom_field in custom_fields %}
                            {% if custom_field.type == 'select' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <select name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" id="input-custom-field{{ custom_field.custom_field_id }}" className="form-control">
                                        <option value="">{{text_select}}</option>


                                        {% for custom_field_value in custom_field.custom_field_value %}
                                        {% if register_custom_field[custom_field.location][custom_field.custom_field_id] and custom_field_value.custom_field_value_id == register_custom_field[custom_field.custom_field_id] %}


                                        <option value="{{ custom_field_value.custom_field_value_id }}" selected="selected">{{custom_field_value.name}}</option>


                                        {% else %}


                                        <option value="{{ custom_field_value.custom_field_value_id }}">{{custom_field_value.name}}</option>


                                        {% endif %}
                                        {% endfor %}


                                    </select>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %}</div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'radio' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <div> {% for custom_field_value in custom_field.custom_field_value %}
                                        <div className="radio">{% if register_custom_field[custom_field.custom_field_id] and custom_field_value.custom_field_value_id == register_custom_field[custom_field.custom_field_id] %}
                                            <label>
                                                <input type="radio" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{{ custom_field_value.custom_field_value_id }}" checked="checked"/>
                                                {{custom_field_value.name}}</label>
                                            {% else %}
                                            <label>
                                                <input type="radio" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{{ custom_field_value.custom_field_value_id }}"/>
                                                {{custom_field_value.name}}</label>
                                            {% endif %} </div>
                                        {% endfor %}</div>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %}</div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'checkbox' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <div> {% for custom_field_value in custom_field.custom_field_value %}
                                        <div className="checkbox">{% if register_custom_field[custom_field.custom_field_id] and custom_field_value.custom_field_value_id in register_custom_field[custom_field.custom_field_id] %}
                                            <label>
                                                <input type="checkbox" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}][]" value="{{ custom_field_value.custom_field_value_id }}" checked="checked"/>
                                                {{custom_field_value.name}}</label>
                                            {% else %}
                                            <label>
                                                <input type="checkbox" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}][]" value="{{ custom_field_value.custom_field_value_id }}"/>
                                                {{custom_field_value.name}}</label>
                                            {% endif %} </div>
                                        {% endfor %} </div>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %} </div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'text' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <input type="text" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{% if register_custom_field[custom_field.custom_field_id] %}{{ register_custom_field[custom_field.custom_field_id] }}{% else %}{{ custom_field.value }}{% endif %}" placeholder="{{ custom_field.name }}" id="input-custom-field{{ custom_field.custom_field_id }}" className="form-control"/>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %} </div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'textarea' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <textarea name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" rows="5" placeholder="{{ custom_field.name }}" id="input-custom-field{{ custom_field.custom_field_id }}" className="form-control">{% if register_custom_field[custom_field.custom_field_id] %}{{register_custom_field[custom_field.custom_field_id]}}{% else %}{{custom_field.value}}{% endif %}</textarea>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %} </div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'file' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <button type="button" id="button-custom-field{{ custom_field.custom_field_id }}" data-loading-text="{{ text_loading }}" className="btn btn-default"><i className="fa fa-upload"></i> {{button_upload}}</button>
                                    <input type="hidden" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{% if register_custom_field[custom_field.custom_field_id] %}  {{ register_custom_field[custom_field.custom_field_id] }} {% endif %}"/>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %}</div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'date' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <div className="input-group date">
                                        <input type="text" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{% if register_custom_field[custom_field.custom_field_id] %}{{ register_custom_field[custom_field.custom_field_id] }}{% else %}{{ custom_field.value }}{% endif %}" placeholder="{{ custom_field.name }}" data-date-format="YYYY-MM-DD" id="input-custom-field{{ custom_field.custom_field_id }}" className="form-control"/>
                                        <span className="input-group-btn">
                <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                </span></div>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %} </div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'time' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <div className="input-group time">
                                        <input type="text" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{% if register_custom_field[custom_field.custom_field_id] %}{{ register_custom_field[custom_field.custom_field_id] }}{% else %}{{ custom_field.value }}{% endif %}" placeholder="{{ custom_field.name }}" data-date-format="HH:mm" id="input-custom-field{{ custom_field.custom_field_id }}" className="form-control"/>
                                        <span className="input-group-btn">
                <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                </span></div>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %} </div>
                            </div>
                            {% endif %}
                            {% if custom_field.type == 'time' %}
                            <div id="custom-field{{ custom_field.custom_field_id }}" className="form-group custom-field" data-sort="{{ custom_field.sort_order }}">
                                <label className="col-sm-2 control-label" htmlFor="input-custom-field{{ custom_field.custom_field_id }}">{{custom_field.name}}</label>
                                <div className="col-sm-10">
                                    <div className="input-group datetime">
                                        <input type="text" name="custom_field[{{ custom_field.location }}][{{ custom_field.custom_field_id }}]" value="{% if register_custom_field[custom_field.custom_field_id] %}{{ register_custom_field[custom_field.custom_field_id] }}{% else %}{{ custom_field.value }}{% endif %}" placeholder="{{ custom_field.name }}" data-date-format="YYYY-MM-DD HH:mm" id="input-custom-field{{ custom_field.custom_field_id }}" className="form-control"/>
                                        <span className="input-group-btn">
                <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                </span></div>
                                    {% if error_custom_field[custom_field.custom_field_id] %}
                                    <div className="text-danger">{{error_custom_field[custom_field.custom_field_id]}}</div>
                                    {% endif %} </div>
                            </div>
                            {% endif %}
                            {% endfor %}
                        </fieldset>
                        <fieldset>
                            <legend>{{text_your_password}}</legend>
                            <div className="form-group required">
                                <label className="col-sm-2 control-label" htmlFor="input-password">{{entry_password}}</label>
                                <div className="col-sm-10">
                                    <input type="password" name="password" value="{{ password }}" placeholder="{{ entry_password }}" id="input-password" className="form-control"/>
                                    {% if error_password %}
                                    <div className="text-danger">{{error_password}}</div>
                                    {% endif %} </div>
                            </div>
                            <div className="form-group required">
                                <label className="col-sm-2 control-label" htmlFor="input-confirm">{{entry_confirm}}</label>
                                <div className="col-sm-10">
                                    <input type="password" name="confirm" value="{{ confirm }}" placeholder="{{ entry_confirm }}" id="input-confirm" className="form-control"/>
                                    {% if error_confirm %}
                                    <div className="text-danger">{{error_confirm}}</div>
                                    {% endif %} </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>{{text_newsletter}}</legend>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">{{entry_newsletter}}</label>
                                <div className="col-sm-10"> {% if newsletter %}
                                    <label className="radio-inline">
                                        <input type="radio" name="newsletter" value="1" checked="checked"/>
                                        {{text_yes}}</label>
                                    <label className="radio-inline">
                                        <input type="radio" name="newsletter" value="0"/>
                                        {{text_no}}</label>
                                    {% else %}
                                    <label className="radio-inline">
                                        <input type="radio" name="newsletter" value="1"/>
                                        {{text_yes}}</label>
                                    <label className="radio-inline">
                                        <input type="radio" name="newsletter" value="0" checked="checked"/>
                                        {{text_no}}</label>
                                    {% endif %} </div>
                            </div>
                        </fieldset>
                        {{captcha}}
                        {% if text_agree %}
                        <div className="buttons">
                            <div className="pull-right">{{text_agree}}
                                {% if agree %}
                                <input type="checkbox" name="agree" value="1" checked="checked"/>
                                {% else %}
                                <input type="checkbox" name="agree" value="1"/>
                                {% endif %}
                                &nbsp;
                                <input type="submit" value="{{ button_continue }}" className="btn btn-primary"/>
                            </div>
                        </div>
                        {% else %}
                        <div className="buttons">
                            <div className="pull-right">
                                <input type="submit" value="{{ button_continue }}" className="btn btn-primary"/>
                            </div>
                        </div>
                        {% endif %}
                    </form>
                    {{content_bottom}}</div>
                {{column_right}}</div>
        </div>
    )
};

export default Currency;