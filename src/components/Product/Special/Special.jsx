import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Special = (props) => {
    let stateSpecial = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="product-search" className="container">
            <ul className="breadcrumb">
                {stateSpecial.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {stateSpecial.column_left ? <ColumnLeft state={stateSpecial.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateSpecial.content_top ? <ContentTop state={stateSpecial.content_top}/> : ''}
                    <h2>{stateSpecial.heading_title}</h2>
                    {stateSpecial.products ?
                        <>
                            <div className="row">
                                <div className="col-md-2 col-sm-6 hidden-xs">
                                    <div className="btn-group btn-group-sm">
                                        <button type="button" id="list-view" className="btn btn-default" data-toggle="tooltip" title={stateSpecial.button_list}><i className="fa fa-th-list"></i></button>
                                        <button type="button" id="grid-view" className="btn btn-default" data-toggle="tooltip" title={stateSpecial.button_grid}><i className="fa fa-th"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group"><NavLink to={stateSpecial.compare} id="compare-total" className="btn btn-link">{stateSpecial.text_compare}</NavLink></div>
                                </div>
                                <div className="col-md-4 col-xs-6">
                                    <div className="form-group input-group input-group-sm">
                                        <label className="input-group-addon" htmlFor="input-sort">{stateSpecial.text_sort}</label>
                                        <select id="input-sort" className="form-control" onChange="location = this.value;">
                                            {stateSpecial.sorts.map(sorts => {
                                                if (sorts.value == `${stateSpecial.sort}-${stateSpecial.order}`) {
                                                    return <option value={sorts.href} selected="selected">{sorts.text}</option>
                                                } else {
                                                    return <option value={sorts.href}>{sorts.text}</option>
                                                }
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="form-group input-group input-group-sm">
                                        <label className="input-group-addon" htmlFor="input-limit">{stateSpecial.text_limit}</label>
                                        <select id="input-limit" className="form-control" onChange="location = this.value;">
                                            {stateSpecial.limits.map(limits => {
                                                if (limits.value == stateSpecial.limit) {
                                                    return <option value={limits.href} selected="selected">{limits.text}</option>
                                                } else {
                                                    return <option value={limits.href}>{limits.text}</option>
                                                }
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {stateSpecial.products.map(product => {
                                    return (
                                        <div className="product-layout product-list col-xs-12">
                                            <div className="product-thumb">
                                                <div className="image"><NavLink to={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-responsive"/></NavLink></div>
                                                <div>
                                                    <div className="caption">
                                                        <h4><a href={product.href}>{product.name}</a></h4>
                                                        <p>{product.description}</p>
                                                        {product.price ?
                                                            <p className="price">
                                                                {!product.special ? product.price : <><span className="price-new">{product.special}</span> <span className="price-old">{product.price}</span></>}
                                                                {product.tax ? <span className="price-tax">{stateSpecial.text_tax} {product.tax}</span> : ''}
                                                            </p> : ''}
                                                        {product.rating ?
                                                            <div className="rating">
                                                                {[1, 2, 3, 4, 5].map(i => {
                                                                    if (product.rating < i) {
                                                                        return <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                    } else {
                                                                        return <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                    }
                                                                })}
                                                            </div> : ''}
                                                    </div>
                                                    <div className="button-group">
                                                        <button type="button" onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"><i className="fa fa-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">{stateSpecial.button_cart}</span></button>
                                                        <button type="button" data-toggle="tooltip" title={stateSpecial.button_wishlist} onClick="wishlist.add('{{ product.product_id }}');"><i className="fa fa-heart"></i></button>
                                                        <button type="button" data-toggle="tooltip" title={stateSpecial.button_compare} onClick="compare.add('{{ product.product_id }}');"><i className="fa fa-exchange"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-left">{stateSpecial.pagination}</div>
                                <div className="col-sm-6 text-right">{stateSpecial.results}</div>
                            </div>
                        </> :
                        <>
                            <p>{stateSpecial.text_empty}</p>
                            <div className="buttons">
                                <div className="pull-right"><a href={stateSpecial.continue} className="btn btn-primary">{stateSpecial.button_continue}</a></div>
                            </div>
                        </>}
                    {stateSpecial.content_bottom ? <ContentBottom state={stateSpecial.content_bottom}/> : ''}
                </div>
                {stateSpecial.column_right ? <ColumnRight state={stateSpecial.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Special;