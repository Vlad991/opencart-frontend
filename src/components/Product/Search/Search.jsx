import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Search = (props) => {
    let stateSearch = props.state;
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
                {stateSearch.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {stateSearch.column_left ? <ColumnLeft state={stateSearch.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateSearch.content_top ? <ContentTop state={stateSearch.content_top}/> : ''}
                    <h1>{stateSearch.heading_title}</h1>
                    <label className="control-label" htmlFor="input-search">{stateSearch.entry_search}</label>
                    <div className="row">
                        <div className="col-sm-4">
                            <input type="text" name="search" value={stateSearch.search} placeholder={stateSearch.text_keyword} id="input-search" className="form-control"/>
                        </div>
                        <div className="col-sm-3">
                            <select name="category_id" className="form-control">
                                <option value="0">{stateSearch.text_category}</option>
                                {stateSearch.categories.map(category_1 => {
                                    return (<>
                                        {category_1.category_id === stateSearch.category_id ?
                                            <option value={category_1.category_id} selected="selected">{category_1.name}</option> :
                                            <option value={category_1.category_id}>{category_1.name}</option>}
                                        {category_1.children.map(category_2 => {
                                            return (<>
                                                {category_2.category_id === stateSearch.category_id ?
                                                    <option value={category_2.category_id} selected="selected">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{category_2.name}</option> :
                                                    <option value={category_2.category_id}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{category_2.name}</option>}
                                                {category_2.children.map(category_3 => {
                                                    if (category_3.category_id === stateSearch.category_id) {
                                                        return <option value={category_3.category_id} selected="selected">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{category_3.name}</option>
                                                    } else {
                                                        return <option value={category_3.category_id}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{category_3.name}</option>
                                                    }
                                                })}
                                            </>)
                                        })}
                                    </>)
                                })}
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <label className="checkbox-inline">
                                {stateSearch.sub_category ? <input type="checkbox" name="sub_category" value="1" checked="checked"/> : <input type="checkbox" name="sub_category" value="1"/>}
                                {stateSearch.text_sub_category}
                            </label>
                        </div>
                    </div>
                    <p>
                        <label className="checkbox-inline">
                            {stateSearch.description ? <input type="checkbox" name="description" value="1" id="description" checked="checked"/> : <input type="checkbox" name="description" value="1" id="description"/>}
                            {stateSearch.entry_description}
                        </label>
                    </p>
                    <input type="button" value={stateSearch.button_search} id="button-search" className="btn btn-primary"/>
                    <h2>{stateSearch.text_search}</h2>
                    {stateSearch.products && stateSearch.products.length > 0 ?
                        <>
                            <div className="row">
                                <div className="col-md-2 col-sm-6 hidden-xs">
                                    <div className="btn-group btn-group-sm">
                                        <button type="button" id="list-view" className="btn btn-default" data-toggle="tooltip" title={stateSearch.button_list}><i className="fa fa-th-list"></i></button>
                                        <button type="button" id="grid-view" className="btn btn-default" data-toggle="tooltip" title={stateSearch.button_grid}><i className="fa fa-th"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group"><NavLink to={stateSearch.compare} id="compare-total" className="btn btn-link">{stateSearch.text_compare}</NavLink></div>
                                </div>
                                <div className="col-md-4 col-xs-6">
                                    <div className="form-group input-group input-group-sm">
                                        <label className="input-group-addon" htmlFor="input-sort">{stateSearch.text_sort}</label>
                                        <select id="input-sort" className="form-control" onChange="location = this.value;">
                                            {stateSearch.sorts.map(sorts => {
                                                if (sorts.value === `${stateSearch.sort}-${stateSearch.order}`) {
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
                                        <label className="input-group-addon" htmlFor="input-limit">{stateSearch.text_limit}</label>
                                        <select id="input-limit" className="form-control" onChange="location = this.value;">
                                            {stateSearch.limits.map(limits => {
                                                if (limits.value === stateSearch.limit) {
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
                                {stateSearch.products.map(product => {
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
                                                                {product.tax ? <span className="price-tax">{stateSearch.text_tax} {product.tax}</span> : ''}
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
                                                        <button type="button" onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"><i className="fa fa-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">{stateSearch.button_cart}</span></button>
                                                        <button type="button" data-toggle="tooltip" title={stateSearch.button_wishlist} onClick="wishlist.add('{{ product.product_id }}');"><i className="fa fa-heart"></i></button>
                                                        <button type="button" data-toggle="tooltip" title={stateSearch.button_compare} onClick="compare.add('{{ product.product_id }}');"><i className="fa fa-exchange"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-left">{stateSearch.pagination}</div>
                                <div className="col-sm-6 text-right">{stateSearch.results}</div>
                            </div>
                        </> :
                        <>
                            <p>{stateSearch.text_empty}</p>
                        </>}
                    {stateSearch.content_bottom ? <ContentBottom state={stateSearch.content_bottom}/> : ''}
                </div>
                {stateSearch.column_right ? <ColumnRight state={stateSearch.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Search;