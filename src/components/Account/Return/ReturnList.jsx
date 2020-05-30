import React from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";

const ReturnList = (props) => {
    let stateReturnList = props.state;
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
                {stateReturnList.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {stateReturnList.column_left ? <ColumnLeft state={stateReturnList.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateReturnList.content_top ? <ContentTop state={stateReturnList.content_top}/> : ''}
                    <h1>{ReactHtmlParser(stateReturnList.heading_title)}</h1>
                    {stateReturnList.returns ?
                        <>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <td className="text-right">{stateReturnList.column_return_id}</td>
                                        <td className="text-left">{stateReturnList.column_status}</td>
                                        <td className="text-left">{stateReturnList.column_date_added}</td>
                                        <td className="text-right">{stateReturnList.column_order_id}</td>
                                        <td className="text-left">{stateReturnList.column_customer}</td>
                                        <td></td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {stateReturnList.returns.map(retur => {
                                        return (
                                            <tr>
                                                <td className="text-right">#{retur.return_id}</td>
                                                <td className="text-left">{retur.status}</td>
                                                <td className="text-left">{retur.date_added}</td>
                                                <td className="text-right">{retur.order_id}</td>
                                                <td className="text-left">{retur.name}</td>
                                                <td className="text-right">
                                                    <NavLink to={retur.href} data-toggle="tooltip" title={stateReturnList.button_view} className="btn btn-info"><i className="fa fa-eye"></i></NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-left">{stateReturnList.pagination}</div>
                                <div className="col-sm-6 text-right">{stateReturnList.results}</div>
                            </div>
                        </> : <p>{ReactHtmlParser(stateReturnList.text_empty)}</p>}
                    <div className="buttons clearfix">
                        <div className="pull-right"><NavLink to={stateReturnList.continue} className="btn btn-primary">{stateReturnList.button_continue}</NavLink></div>
                    </div>
                    {stateReturnList.content_bottom ? <ContentBottom state={stateReturnList.content_bottom}/> : ''}
                </div>
                {stateReturnList.column_right ? <ColumnRight state={stateReturnList.column_right}/> : ''}
            </div>
        </div>
    )
};

export default ReturnList;