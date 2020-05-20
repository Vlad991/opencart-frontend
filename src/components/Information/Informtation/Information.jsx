import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ColumnRight from "../../Common/ColumnRight";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Information = (props) => {
    let stateInformation = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="information-information" className="container">
            <ul className="breadcrumb">
                {stateInformation.breadcrumbs.map(breadcrumb => {
                    return <li><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>
                })}
            </ul>
            <div className="row">
                {stateInformation.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateInformation.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h1>{ReactHtmlParser(stateInformation.heading_title)}</h1>
                    {ReactHtmlParser(stateInformation.description)}
                    {stateInformation.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {stateInformation.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Information;