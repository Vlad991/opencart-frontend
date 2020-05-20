import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Category = (props) => {
    let stateCategory = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="product-category" className="container">
            <ul className="breadcrumb">
                {stateCategory.breadcrumbs.map(breadcrumb => {
                    return (
                        <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>
                    )
                })}
            </ul>
            <div className="row">
                {stateCategory.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateCategory.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h2>{ReactHtmlParser(stateCategory.heading_title)}</h2>
                    {(stateCategory.thumb || stateCategory.description) ?
                        <>
                            <div className="row">
                                {stateCategory.thumb ? <div className="col-sm-2"><img src={stateCategory.thumb} alt={stateCategory.heading_title} title={stateCategory.heading_title} className="img-thumbnail"/></div> : ''}
                                {stateCategory.description ? <div className="col-sm-10">{ReactHtmlParser(stateCategory.description)}</div> : ''}
                            </div>
                            < hr/>
                        </>
                        : ''}
                    {stateCategory.categories ?
                        <>
                            <h3 key={stateCategory.text_refine}>{stateCategory.text_refine}</h3>
                            {(stateCategory.categories.length <= 5) ?
                                <div className="row">
                                    <div className="col-sm-3">
                                        <ul>
                                            {stateCategory.categories.map(category => <li key={category.name}><NavLink to={category.href}>{category.name}</NavLink></li>)}
                                        </ul>
                                    </div>
                                </div> :
                                <>
                                    <div className="row"><Categories categories={stateCategory.categories}/></div>
                                    <br/>
                                </>}
                        </>
                        : ''}
                    {stateCategory.products ?
                        <>
                            <div className="row">
                                <div className="col-md-2 col-sm-6 hidden-xs">
                                    <div className="btn-group btn-group-sm">
                                        <button type="button" id="list-view" className="btn btn-default active" data-toggle="tooltip" title={stateCategory.button_list}><i className="fa fa-th-list"></i></button>
                                        <button type="button" id="grid-view" className="btn btn-default" data-toggle="tooltip" title={stateCategory.button_grid}><i className="fa fa-th"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group"><a href={stateCategory.compare} id="compare-total" className="btn btn-link">{stateCategory.text_compare}</a></div>
                                </div>
                                <div className="col-md-4 col-xs-6">
                                    <div className="form-group input-group input-group-sm">
                                        <label className="input-group-addon" htmlFor="input-sort">{stateCategory.text_sort}</label>
                                        <select id="input-sort" className="form-control" value={stateCategory.sorts[0].href} onChange={() => {
                                        }//location = this.value
                                        }>
                                            {stateCategory.sorts.map(sorts => {
                                                if (sorts.value === (stateCategory.sort + '-' + stateCategory.order)) {
                                                    return <option key={sorts.text} value={sorts.href}>{sorts.text}</option>
                                                } else {
                                                    return <option key={sorts.text} value={sorts.href}>{sorts.text}</option>
                                                }
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="form-group input-group input-group-sm">
                                        <label className="input-group-addon" htmlFor="input-limit">{stateCategory.text_limit}</label>
                                        <select id="input-limit" className="form-control" defaultValue="v" //todo
                                            //onChange="location = this.value;"
                                        >
                                            {stateCategory.limits.map(limits => {
                                                if (limits.value === stateCategory.limit) {
                                                    return <option key={limits.text} value={limits.href}>{limits.text}</option>
                                                } else {
                                                    return <option key={limits.text} value={limits.href}>{limits.text}</option>
                                                }
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {stateCategory.products.map(product => {
                                    return (
                                        <div key={product.name} className="product-layout product-list col-xs-12">
                                            <div className="product-thumb">
                                                <div className="image"><NavLink to={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-responsive"/></NavLink></div>
                                                <div>
                                                    <div className="caption">
                                                        <h4><NavLink to={product.href}>{product.name}</NavLink></h4>
                                                        <p>{product.description}</p>
                                                        {product.price ?
                                                            <p className="price">
                                                                {!product.special ? product.price : (
                                                                    <>
                                                                        <span className="price-new">{product.special}</span>
                                                                        <span className="price-old">{product.price}</span>
                                                                    </>
                                                                )}
                                                                {product.tax ? <span className="price-tax">{stateCategory.text_tax} {product.tax}</span> : ''}
                                                            </p>
                                                            : ''}
                                                        {product.rating ?
                                                            <div className="rating">
                                                                {[1, 2, 3, 4, 5].map(i => {
                                                                    if (product.rating < i) {
                                                                        return <span key={i} className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                    } else {
                                                                        return <span key={i} className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                                                    }
                                                                })}
                                                            </div>
                                                            : ''}
                                                    </div>
                                                    <div className="button-group">
                                                        <button type="button"
                                                            //onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"
                                                        ><i className="fa fa-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">{stateCategory.button_cart}</span></button>
                                                        <button type="button" data-toggle="tooltip" title={stateCategory.button_wishlist}
                                                            //onClick="wishlist.add('{{ product.product_id }}');"
                                                        ><i className="fa fa-heart"></i></button>
                                                        <button type="button" data-toggle="tooltip" title={stateCategory.button_compare}
                                                            //onClick="compare.add('{{ product.product_id }}');"
                                                        ><i className="fa fa-exchange"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-left">{stateCategory.pagination}</div>
                                <div className="col-sm-6 text-right">{stateCategory.results}</div>
                            </div>
                        </>
                        : ''}
                    {(!stateCategory.categories && !stateCategory.products) ? [
                        <p>{stateCategory.text_empty}</p>,
                        <div className="buttons">
                            <div className="pull-right"><NavLink to={stateCategory.continue} className="btn btn-primary"> {stateCategory.button_continue}</NavLink></div>
                        </div>
                    ] : ''}
                    {stateCategory.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {stateCategory.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
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
        groups.map((category, i) => {
            return (
                <div key={i} className="col-sm-3">
                    <ul>
                        {category.map(child => {
                            return <li key={child.name}><NavLink to={child.href}>{child.name}</NavLink></li>
                        })}
                    </ul>
                </div>
            )
        })
    )
};

export default Category;