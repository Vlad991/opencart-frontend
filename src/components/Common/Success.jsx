import React from 'react';
import ColumnLeft from "./ColumnLeft";
import ContentTop from "./ContentTop";
import ReactHtmlParser from "react-html-parser";
import ContentBottom from "./ContentBottom";
import ColumnRight from "./ColumnRight";
import {NavLink} from "react-router-dom";

const Success = (props) => {
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }

    return (
        <div id="common-success" className="container">
            <ul className="breadcrumb">
                {props.state.breadcrumbs.map(breadcrumb => <li><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {props.state.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {props.state.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h1>{props.state.heading_title}</h1>
                    {ReactHtmlParser(props.state.text_message)}
                    <div className="buttons">
                        <div className="pull-right"><NavLink to={props.state.continue} className="btn btn-primary">{props.state.button_continue}</NavLink></div>
                    </div>
                    {props.state.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {props.state.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Success;