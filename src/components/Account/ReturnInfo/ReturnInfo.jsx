import React from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";

const ReturnList = (props) => {
    let stateReturnInfo = props.state;
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
                {stateReturnInfo.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {stateReturnInfo.column_left ? <ColumnLeft state={stateReturnInfo.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateReturnInfo.content_top ? <ContentTop state={stateReturnInfo.content_top}/> : ''}
                    <h1>{ReactHtmlParser(stateReturnInfo.heading_title)}</h1>
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <td className="text-left" colSpan="2">{stateReturnInfo.text_return_detail}</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-left" style={{width: 50 + '%'}}><b>{stateReturnInfo.text_return_id}</b> #{stateReturnInfo.return_id}<br/>
                                <b>{stateReturnInfo.text_date_added}</b> {stateReturnInfo.date_added}</td>
                            <td className="text-left" style={{width: 50 + '%'}}><b>{stateReturnInfo.text_order_id}</b> #{stateReturnInfo.order_id}<br/>
                                <b>{stateReturnInfo.text_date_ordered}</b> {stateReturnInfo.date_ordered}</td>
                        </tr>
                        </tbody>
                    </table>
                    <h3>{ReactHtmlParser(stateReturnInfo.text_product)}</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_product}</td>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_model}</td>
                                <td className="text-right" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_quantity}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-left">{stateReturnInfo.product}</td>
                                <td className="text-left">{stateReturnInfo.model}</td>
                                <td className="text-right">{stateReturnInfo.quantity}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>{stateReturnInfo.text_reason}</h3>
                    <div className="table-responsive">
                        <table className="list table table-bordered table-hover">
                            <thead>
                            <tr>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_reason}</td>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_opened}</td>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_action}</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-left">{stateReturnInfo.reason}</td>
                                <td className="text-left">{stateReturnInfo.opened}</td>
                                <td className="text-left">{stateReturnInfo.action}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {stateReturnInfo.comment ?
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <td className="text-left">{stateReturnInfo.text_comment}</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="text-left">{stateReturnInfo.comment}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>: ''}
                    <h3>{ReactHtmlParser(stateReturnInfo.text_history)}</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_date_added}</td>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_status}</td>
                                <td className="text-left" style={{width: 33.3 + '%'}}>{stateReturnInfo.column_comment}</td>
                            </tr>
                            </thead>
                            <tbody>
                            {stateReturnInfo.histories ? stateReturnInfo.histories.map(history =>{
                                return (
                                    <tr>
                                        <td className="text-left">{history.date_added}</td>
                                        <td className="text-left">{history.status}</td>
                                        <td className="text-left">{history.comment}</td>
                                    </tr>
                                )
                            }):
                                <tr>
                                    <td colSpan="3" className="text-center">{stateReturnInfo.text_no_results}</td>
                                </tr>}
                            </tbody>
                        </table>
                    </div>
                    <div className="buttons clearfix">
                        <div className="pull-right"><NavLink to={ stateReturnInfo.continue } className="btn btn-primary">{stateReturnInfo.button_continue}</NavLink></div>
                    </div>
                    {stateReturnInfo.content_bottom ? <ContentBottom state={stateReturnInfo.content_bottom}/> : ''}
                </div>
                {stateReturnInfo.column_right ? <ColumnRight state={stateReturnInfo.column_right}/> : ''}
            </div>
        </div>
    )
};

export default ReturnList;