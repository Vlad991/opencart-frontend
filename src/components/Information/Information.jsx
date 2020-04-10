import React from 'react';
import ColumnLeft from "../Common/ColumnLeft";
import ColumnRight from "../Common/ColumnRight";
import ContentTop from "../Common/ContentTop";
import ContentBottom from "../Common/ContentBottom";
import {NavLink} from "react-router-dom";

const Information = (props) => {
    let stateInformation = props.state.informationReducer.informationReducer;
    let classVal;
    if (stateInformation.column_left && stateInformation.column_right) {
        classVal = 'col-sm-6';
    } else if (stateInformation.column_left || stateInformation.column_right) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="information-information" className="container">
            <ul className="breadcrumb">
                {stateInformation.breadcrumbs.map(breadcrumb => {
                    return <li><NavLink to={breadcrumb.href}>{breadcrumb.text}</NavLink></li>
                })}
            </ul>
            <div className="row">
                {stateInformation.column_left ? <ColumnLeft state={props.state.extensionReducer.moduleReducer}/> : ''}
                <div id="content" className={classVal}>
                    {stateInformation.content_top ? <ContentTop state={props.state.extensionReducer.moduleReducer}/> : ''}
                    <h1>{stateInformation.heading_title}</h1>
                    {stateInformation.description}
                    {stateInformation.content_bottom ? <ContentBottom state={props.state.extensionReducer.moduleReducer}/> : ''}
                </div>
                {stateInformation.column_right ? <ColumnRight state={props.state.extensionReducer.moduleReducer}/> : ''}
            </div>
        </div>
    )
};

export default Information;