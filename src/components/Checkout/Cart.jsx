import React from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../Common/ColumnLeft";
import ContentTop from "../Common/ContentTop";
import ContentBottom from "../Common/ContentBottom";
import ColumnRight from "../Common/ColumnRight";
import Coupon from "../Extension/Total/Coupon";
import Reward from "../Extension/Total/Reward";
import Shipping from "../Extension/Total/Shipping";
import Voucher from "../Extension/Total/Voucher";

const Cart = (props) => {
    let stateCart = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="checkout-cart" className="container">
            <ul className="breadcrumb">
                {stateCart.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateCart.attention ?
                <div className="alert alert-info"><i className="fa fa-info-circle"></i>
                    {stateCart.attention}
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                </div> : ''}
            {stateCart.success ?
                <div className="alert alert-success alert-dismissible"><i className="fa fa-check-circle"></i>
                    {stateCart.success}
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                </div> : ''}
            {stateCart.error_warning ?
                <div className="alert alert-danger alert-dismissible"><i className="fa fa-exclamation-circle"></i>
                    {stateCart.error_warning}
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                </div> : ''}
            <div className="row">
                {stateCart.column_left ? <ColumnLeft state={stateCart.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateCart.content_top ? <ContentTop state={stateCart.content_top}/> : ''}
                    <h1>
                        {stateCart.heading_title}
                        {stateCart.weight ?
                            <>
                                &nbsp;
                                ({stateCart.weight})
                            </> : ''}
                    </h1>
                    <form action={stateCart.action} method="post" encType="multipart/form-data">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <td className="text-center">{stateCart.column_image}</td>
                                    <td className="text-left">{stateCart.column_name}</td>
                                    <td className="text-left">{stateCart.column_model}</td>
                                    <td className="text-left">{stateCart.column_quantity}</td>
                                    <td className="text-right">{stateCart.column_price}</td>
                                    <td className="text-right">{stateCart.column_total}</td>
                                </tr>
                                </thead>
                                <tbody>
                                {stateCart.products.map(product => {
                                    return (
                                        <tr>
                                            <td className="text-center">
                                                {product.thumb ? <NavLink to={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-thumbnail"/></NavLink> : ''}
                                            </td>
                                            <td className="text-left">
                                                <NavLink to={product.href}>{product.name}</NavLink>
                                                {product.stock ? <span className="text-danger">***</span> : ''}
                                                {product.option ? product.option.map(option => <><br/><small>{option.name}: {option.value}</small></>) : ''}
                                                {product.reward ? <><br/><small>{product.reward}</small></> : ''}
                                                {product.recurring ? <><br/><span className="label label-info">{stateCart.text_recurring_item}</span> <small>{product.recurring}</small></> : ''}
                                            </td>
                                            <td className="text-left">{product.model}</td>
                                            <td className="text-left">
                                                <div className="input-group btn-block" style={{maxWidth: '200px'}}>
                                                    <input type="text" name={"quantity[" + product.cart_id + "]"} value={product.quantity} size="1" className="form-control"/>
                                                    <span className="input-group-btn">
                                                        <button type="submit" data-toggle="tooltip" title={stateCart.button_update} className="btn btn-primary"><i className="fa fa-refresh"></i></button>
                                                        <button type="button" data-toggle="tooltip" title={stateCart.button_remove} className="btn btn-danger" onClick="cart.remove('{{ product.cart_id }}');"><i className="fa fa-times-circle"></i></button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="text-right">{product.price}</td>
                                            <td className="text-right">{product.total}</td>
                                        </tr>
                                    )
                                })}
                                {stateCart.vouchers.map(voucher => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td className="text-left">{voucher.description}</td>
                                            <td className="text-left"></td>
                                            <td className="text-left">
                                                <div className="input-group btn-block" style={{maxWidth: '200px'}}>
                                                    <input type="text" name="" value="1" size="1" disabled="disabled" className="form-control"/>
                                                    <span className="input-group-btn">
                                                        <button type="button" data-toggle="tooltip" title={stateCart.button_remove} className="btn btn-danger" onClick="voucher.remove('{{ voucher.key }}');"><i className="fa fa-times-circle"></i></button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="text-right">{voucher.amount}</td>
                                            <td className="text-right">{voucher.amount}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </form>
                    {stateCart.modules ?
                        <>
                            <h2>{stateCart.text_next}</h2>
                            <p>{stateCart.text_next_choice}</p>
                            <div className="panel-group" id="accordion">
                                {stateCart.modules.map(module => {
                                    switch (module.module_name) {
                                        case 'coupon':
                                            return <Coupon state={module}/>
                                        case 'reward':
                                            return <Reward state={module}/>
                                        case 'shipping':
                                            return <Shipping state={module}/>
                                        case 'voucher':
                                            return <Voucher state={module}/>
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </> : ''}
                    <br/>
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-8">
                            <table className="table table-bordered">
                                {stateCart.totals.map(total => {
                                    return (
                                        <tr>
                                            <td className="text-right"><strong>{total.title}:</strong></td>
                                            <td className="text-right">{total.text}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                    <div className="buttons clearfix">
                        <div className="pull-left"><NavLink to={stateCart.continue} className="btn btn-default">{stateCart.button_shopping}</NavLink></div>
                        <div className="pull-right"><NavLink to={stateCart.checkout} className="btn btn-primary">{stateCart.button_checkout}</NavLink></div>
                    </div>
                    {stateCart.content_bottom ? <ContentBottom state={stateCart.content_bottom}/> : ''}
                </div>
                {stateCart.column_right ? <ColumnRight state={stateCart.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Cart;