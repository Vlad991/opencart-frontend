import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const ManufacturerInfo = (props) => {
    let stateManufacturerInfo = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }

    return (
        <div id="product-manufacturer" className="container">
            <ul className="breadcrumb">
                {stateManufacturerInfo.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {props.state.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {props.state.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h2>{ReactHtmlParser(stateManufacturerInfo.heading_title)}</h2>
                    {stateManufacturerInfo.products ? <>
                        <div className="row">
                            <div className="col-md-2 col-sm-6 hidden-xs">
                                <div className="btn-group btn-group-sm">
                                    <button type="button" id="list-view" className="btn btn-default" data-toggle="tooltip" title={stateManufacturerInfo.button_list}><i className="fa fa-th-list"></i></button>
                                    <button type="button" id="grid-view" className="btn btn-default" data-toggle="tooltip" title={stateManufacturerInfo.button_grid}><i className="fa fa-th"></i></button>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group"><a href={stateManufacturerInfo.compare} id="compare-total" className="btn btn-link">{stateManufacturerInfo.text_compare}</a></div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="form-group input-group input-group-sm">
                                    <label className="input-group-addon" htmlFor="input-sort">{stateManufacturerInfo.text_sort}</label>
                                    <select id="input-sort" className="form-control" onChange="location = this.value;">
                                        {stateManufacturerInfo.sorts.map(sorts => {
                                            if (sorts.value === (stateManufacturerInfo.sort + "-" + stateManufacturerInfo.order)) {
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
                                    <label className="input-group-addon" htmlFor="input-limit">{stateManufacturerInfo.text_limit}</label>
                                    <select id="input-limit" className="form-control" onChange="location = this.value;">
                                        {stateManufacturerInfo.limits.map(limits => {
                                            if (limits.value == stateManufacturerInfo.limit) {
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
                            {stateManufacturerInfo.products.map(product => (
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-thumb">
                                        <div className="image">
                                            <NavLink to={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-responsive"/></NavLink>
                                        </div>
                                        <div>
                                            <div className="caption">
                                                <h4><NavLink to={product.href}>{ReactHtmlParser(product.name)}</NavLink></h4>
                                                <p>{ReactHtmlParser(product.description)}</p>
                                                {product.price ?
                                                    <p className="price">
                                                        {!product.special ? product.price : <><span className="price-new">{product.special}</span> <span className="price-old">{product.price}</span></>}
                                                        {product.tax ? <span className="price-tax">{stateManufacturerInfo.text_tax} {product.tax}</span> : ''}
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
                                                <button type="button" onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"><i className="fa fa-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">{stateManufacturerInfo.button_cart}</span></button>
                                                <button type="button" data-toggle="tooltip" title={stateManufacturerInfo.button_wishlist} onClick="wishlist.add('{{ product.product_id }}');"><i className="fa fa-heart"></i></button>
                                                <button type="button" data-toggle="tooltip" title={stateManufacturerInfo.button_compare} onClick="compare.add('{{ product.product_id }}');"><i className="fa fa-exchange"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-sm-6 text-left">{ReactHtmlParser(stateManufacturerInfo.pagination)}</div>
                            <div className="col-sm-6 text-right">{stateManufacturerInfo.results}</div>
                        </div>
                    </> : <>
                        <p>{stateManufacturerInfo.text_empty}</p>
                        <div className="buttons">
                            <div className="pull-right"><NavLink to={stateManufacturerInfo.continue} className="btn btn-primary">{stateManufacturerInfo.button_continue}</NavLink></div>
                        </div>
                    </>}
                    {props.state.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {props.state.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default ManufacturerInfo;