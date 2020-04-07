import React from 'react';
import ColumnLeft from "../Common/ColumnLeft";
import ContentTop from "../Common/ContentTop";
import ContentBottom from "../Common/ContentBottom";
import ColumnRight from "../Common/ColumnRight";

const Category = (props) => {
    let stateCategory = props.state.productReducer.categoryReducer;
    let classVal;
    if (stateCategory.column_left && stateCategory.column_right) {
        classVal = 'col-sm-6';
    } else if (stateCategory.column_left || stateCategory.column_right) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="product-category" className="container">
            <ul className="breadcrumb">
                {stateCategory.breadcrumbs.map(breadcrumb => {
                    return (
                        <li><a href={breadcrumb.href}>{breadcrumb.text}</a></li>
                    )
                })}
            </ul>
            <div className="row">
                {stateCategory.column_left ? <ColumnLeft state={props.state.extensionReducer.moduleReducer}/> : ''}
                <div id="content" className={classVal}>
                    {stateCategory.content_top ? <ContentTop state={props.state.extensionReducer.moduleReducer}/> : ''}
                    <h2>{stateCategory.heading_title}</h2>
                    {(stateCategory.thumb || stateCategory.description) ? [
                        <div className="row">
                            {stateCategory.thumb ? <div className="col-sm-2"><img src={stateCategory.thumb} alt={stateCategory.heading_title} title={stateCategory.heading_title} className="img-thumbnail"/></div> : ''}
                            {stateCategory.description ? <div className="col-sm-10">{stateCategory.description}</div> : ''}
                        </div>,
                        < hr/>
                    ] : ''}
                    {stateCategory.categories ? [
                        <h3>{stateCategory.text_refine}</h3>,
                        (stateCategory.categories.length <= 5) ?
                            <div className="row">
                                <div className="col-sm-3">
                                    <ul>
                                        {stateCategory.categories.map(category => <li><a href={category.href}>{category.name}</a></li>)}
                                    </ul>
                                </div>
                            </div> :
                            [<div className="row"><Categories categories={stateCategory.categories}/></div>, <br/>]
                    ] : ''}
                    {stateCategory.products ? [
                        <div className="row">
                            <div className="col-md-2 col-sm-6 hidden-xs">
                                <div className="btn-group btn-group-sm">
                                    <button type="button" id="list-view" className="btn btn-default" data-toggle="tooltip" title={stateCategory.button_list}><i className="fa fa-th-list"></i></button>
                                    <button type="button" id="grid-view" className="btn btn-default" data-toggle="tooltip" title={stateCategory.button_grid}><i className="fa fa-th"></i></button>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group"><a href={stateCategory.compare} id="compare-total" className="btn btn-link">{stateCategory.text_compare}</a></div>
                            </div>
                            <div className="col-md-4 col-xs-6">
                                <div className="form-group input-group input-group-sm">
                                    <label className="input-group-addon" htmlFor="input-sort">{stateCategory.text_sort}</label>
                                    <select id="input-sort" className="form-control" onChange="location = this.value;">
                                        {stateCategory.sorts.map(sorts => {
                                            if (sorts.value === (stateCategory.sort + '-' + stateCategory.order)) {
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
                                    <label className="input-group-addon" htmlFor="input-limit">{stateCategory.text_limit}</label>
                                    <select id="input-limit" className="form-control" onChange="location = this.value;">
                                        {stateCategory.limits.map(limits => {
                                            if (limits.value === stateCategory.limit) {
                                                return <option value={limits.href} selected="selected">{limits.text}</option>
                                            } else {
                                                return <option value={limits.href}>{limits.text}</option>
                                            }
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>,
                        <div className="row">
                            {stateCategory.products.map(product => {
                                return (
                                    <div className="product-layout product-list col-xs-12">
                                        <div className="product-thumb">
                                            <div className="image"><a href={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-responsive" style={{width: 200 + 'px'}}/></a></div>
                                            <div>
                                                <div className="caption">
                                                    <h4><a href={product.href}>{product.name}</a></h4>
                                                    <p>{product.description}</p>
                                                    {product.price ?
                                                        <p className="price">
                                                            {!product.special ? product.price : [
                                                                <span className="price-new">{product.special}</span>,
                                                                <span className="price-old">{product.price}</span>
                                                            ]}
                                                            {product.tax ? <span className="price-tax">{stateCategory.text_tax} {product.tax}</span> : ''}
                                                        </p>
                                                        : ''}
                                                    {product.rating ?
                                                        <div className="rating">
                                                            {[1, 2, 3, 4, 5].map(i => {
                                                                if (product.rating < i) {
                                                                    return <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                } else {
                                                                    return <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                }
                                                            })}
                                                        </div>
                                                        : ''}
                                                </div>
                                                <div className="button-group">
                                                    <button type="button" onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"><i className="fa fa-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">{stateCategory.button_cart}</span></button>
                                                    <button type="button" data-toggle="tooltip" title={stateCategory.button_wishlist} onClick="wishlist.add('{{ product.product_id }}');"><i className="fa fa-heart"></i></button>
                                                    <button type="button" data-toggle="tooltip" title={stateCategory.button_compare} onClick="compare.add('{{ product.product_id }}');"><i className="fa fa-exchange"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>,
                        <div className="row">
                            <div className="col-sm-6 text-left">{stateCategory.pagination}</div>
                            <div className="col-sm-6 text-right">{stateCategory.results}</div>
                        </div>
                    ] : ''}
                    {(!stateCategory.categories && !stateCategory.products) ? [
                        <p>{stateCategory.text_empty}</p>,
                        <div className="buttons">
                            <div className="pull-right"><a href={stateCategory.continue} className="btn btn-primary"> {stateCategory.button_continue}</a></div>
                        </div>
                    ] : ''}
                    {stateCategory.content_bottom ? <ContentBottom state={props.state.extensionReducer.moduleReducer}/> : ''}
                </div>
                {stateCategory.column_right ? <ColumnRight state={props.state.extensionReducer.moduleReducer}/> : ''}
            </div>
        </div>
    )
};

const Categories = (props) => {
    let categories = props.categories;
    let groups = [];
    let columnCount = 4;
    let size = Math.ceil(categories.length / columnCount);
    for (let i = 0; i < columnCount; i++) {
        groups[i] = categories.slice((i * size), (i * size) + size);
    }
    return (
        groups.map(category => {
            return (
                <div className="col-sm-3">
                    <ul>
                        {category.map(child => {
                            return <li><a href={child.href}>{child.name}</a></li>
                        })}
                    </ul>
                </div>
            )
        })
    )
};

export default Category;