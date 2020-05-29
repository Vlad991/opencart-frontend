import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";

const Account = (props) => {
    let stateAccount = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="account-account" className="container">
            <ul className="breadcrumb">
                {stateAccount.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateAccount.success ? <div className="alert alert-success alert-dismissible"><i className="fa fa-check-circle"></i> {stateAccount.success}</div> : ''}
            <div className="row">
                {stateAccount.column_left ? <ColumnLeft state={stateAccount.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateAccount.content_top ? <ContentTop state={stateAccount.content_top}/> : ''}
                    <h2>{stateAccount.text_my_account}</h2>
                    <ul className="list-unstyled">
                        <li><NavLink to={stateAccount.edit}>{stateAccount.text_edit}</NavLink></li>
                        <li><NavLink to={stateAccount.password}>{stateAccount.text_password}</NavLink></li>
                        <li><NavLink to={stateAccount.address}>{stateAccount.text_address}</NavLink></li>
                        <li><NavLink to={stateAccount.wishlist}>{stateAccount.text_wishlist}</NavLink></li>
                    </ul>
                    {stateAccount.credit_cards.length > 0 ?
                        <>
                            <h2>{stateAccount.text_credit_card}</h2>
                            <ul className="list-unstyled">
                                {stateAccount.credit_cards.map(credit_card => <li><NavLink to={credit_card.href}>{credit_card.name}</NavLink></li>)}
                            </ul>
                        </>
                        : ''}
                    <h2>{stateAccount.text_my_orders}</h2>
                    <ul className="list-unstyled">
                        <li><NavLink to={stateAccount.order}>{stateAccount.text_order}</NavLink></li>
                        <li><NavLink to={stateAccount.download}>{stateAccount.text_download}</NavLink></li>
                        {stateAccount.reward ? <li><NavLink to={stateAccount.reward}>{stateAccount.text_reward}</NavLink></li> : ''}
                        <li><NavLink to={stateAccount.return}>{stateAccount.text_return}</NavLink></li>
                        <li><NavLink to={stateAccount.transaction}>{stateAccount.text_transaction}</NavLink></li>
                        <li><NavLink to={stateAccount.recurring}>{stateAccount.text_recurring}</NavLink></li>
                    </ul>
                    <h2>{stateAccount.text_my_affiliate}</h2>
                    <ul className="list-unstyled">
                        {!stateAccount.tracking ?
                            <li><NavLink to={stateAccount.affiliate}>{stateAccount.text_affiliate_add}</NavLink></li> :
                            <>
                                <li><NavLink to={stateAccount.affiliate}>{stateAccount.text_affiliate_edit}</NavLink></li>
                                <li><NavLink to={stateAccount.tracking}>{stateAccount.text_tracking}</NavLink></li>
                            </>}
                    </ul>
                    <h2>{stateAccount.text_my_newsletter}</h2>
                    <ul className="list-unstyled">
                        <li><NavLink to={stateAccount.newsletter}>{stateAccount.text_newsletter}</NavLink></li>
                    </ul>
                    {stateAccount.content_bottom ? <ContentBottom state={stateAccount.content_bottom}/> : ''}
                </div>
                {stateAccount.column_right ? <ColumnRight state={stateAccount.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Account;