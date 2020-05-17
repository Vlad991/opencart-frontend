import React from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ColumnLeft from "../Common/ColumnLeft";
import ColumnRight from "../Common/ColumnRight";
import ContentBottom from "../Common/ContentBottom";
import ContentTop from "../Common/ContentTop";

const WishList = (props) => {
    let stateWishList = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="account-wishlist" className="container">
            <ul className="breadcrumb">
                {stateWishList.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateWishList.success ?
                <div className="alert alert-success alert-dismissible">
                    <i className="fa fa-check-circle"></i> {stateWishList.success}
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                </div> : ''}
            <div className="row">
                {stateWishList.column_left ? <ColumnLeft state={stateWishList.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateWishList.content_top ? <ContentTop state={stateWishList.content_top}/> : ''}
                    <h2>{stateWishList.heading_title}</h2>
                    {stateWishList.products && stateWishList.products.length > 0 ?
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <td className="text-center">{stateWishList.column_image}</td>
                                    <td className="text-left">{stateWishList.column_name}</td>
                                    <td className="text-left">{stateWishList.column_model}</td>
                                    <td className="text-right">{stateWishList.column_stock}</td>
                                    <td className="text-right">{stateWishList.column_price}</td>
                                    <td className="text-right">{stateWishList.column_action}</td>
                                </tr>
                                </thead>
                                <tbody>
                                {stateWishList.products.map(product => {
                                    return (
                                        <tr>
                                            <td className="text-center">
                                                {product.thumb ? <NavLink to={product.href}><img src={product.thumb} alt={product.name} title={product.name}/></NavLink> : ''}
                                            </td>
                                            <td className="text-left"><NavLink to={product.href}>{product.name}</NavLink></td>
                                            <td className="text-left">{product.model}</td>
                                            <td className="text-right">{product.stock}</td>
                                            <td className="text-right">
                                                {product.price ?
                                                    <div className="price">
                                                        {!product.special ? product.price : <><b>{product.special}</b> <s>{product.price}</s></>}
                                                    </div> : ''}
                                            </td>
                                            <td className="text-right">
                                                <button type="button" onClick="cart.add('{{ product.product_id }}');" data-toggle="tooltip" title={ stateWishList.button_cart } className="btn btn-primary"><i className="fa fa-shopping-cart"></i></button>
                                                <a href={ product.remove } data-toggle="tooltip" title={ stateWishList.button_remove } className="btn btn-danger"><i className="fa fa-times"></i></a>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                        : <p>{stateWishList.text_empty}</p>}
                    <div className="buttons clearfix">
                        <div className="pull-right"><NavLink to={stateWishList.continue} className="btn btn-primary">{stateWishList.button_continue}</NavLink></div>
                    </div>
                    {stateWishList.content_bottom ? <ContentBottom state={stateWishList.content_bottom}/> : ''}
                </div>
                {stateWishList.column_right ? <ColumnRight state={stateWishList.column_right}/> : ''}
            </div>
        </div>
    )
};

export default WishList;