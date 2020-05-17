import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {Nav} from "react-bootstrap";
//import { LightBoxGallery, GalleryItem } from "react-magnific-popup";

const Product = (props) => {
    let stateProduct = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }

    let i = 0;
    let productClassVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        productClassVal = 'col-xs-8 col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        productClassVal = 'col-xs-6 col-md-4';
    } else {
        productClassVal = 'col-xs-6 col-sm-3';
    }

    let productClassVal1;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        productClassVal1 = 'col-sm-6';
    } else {
        productClassVal1 = 'col-sm-8';
    }

    let productClassVal2;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        productClassVal2 = 'col-sm-6';
    } else {
        productClassVal2 = 'col-sm-4';
    }
    return (
        <div id="product-product" className="container">
            <ul className="breadcrumb">
                {stateProduct.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {stateProduct.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateProduct.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <div className="row">
                        <div className={productClassVal1}>
                            {stateProduct.thumb || stateProduct.images ?
                                <ul className="thumbnails">
                                    {stateProduct.thumb ?
                                        <li>
                                            <a className="thumbnail" href={stateProduct.popup} title={stateProduct.heading_title}>
                                                <img src={stateProduct.thumb} title={stateProduct.heading_title} alt={stateProduct.heading_title}/>
                                            </a>
                                        </li> : ''}
                                    {stateProduct.images ? stateProduct.images.map(image => {
                                        return <li key={image.thumb} className="image-additional"><a className="thumbnail" href={image.popup} title={stateProduct.heading_title}> <img src={image.thumb} title={stateProduct.heading_title} alt={stateProduct.heading_title}/></a></li>
                                    }) : ''}
                                </ul>
                                : ''}
                            <Nav as="ul" variant="tabs" activeKey="/tab-description" onSelect={props.selectProductTab}>
                                <Nav.Item as="li" className={'tab-pane' + (stateProduct.active_tab === '/tab-description' ? ' active' : '')}>
                                    <Nav.Link href="/tab-description">{stateProduct.tab_description}</Nav.Link>
                                </Nav.Item>
                                {stateProduct.attribute_groups ? <Nav.Item as="li" className={'tab-pane' + (stateProduct.active_tab === '/tab-specification' ? ' active' : '')}><Nav.Link href="/tab-specification">{stateProduct.tab_attribute}</Nav.Link></Nav.Item> : ''}
                                {stateProduct.review_status ? <Nav.Item as="li" className={'tab-pane' + (stateProduct.active_tab === '/tab-review' ? ' active' : '')}><Nav.Link href="/tab-review">{stateProduct.tab_review}</Nav.Link></Nav.Item> : ''}
                            </Nav>
                            <div className="tab-content">
                                <div className={'tab-pane' + (stateProduct.active_tab === '/tab-description' ? ' active' : '')}>{ReactHtmlParser(stateProduct.description)}</div>
                                {stateProduct.attribute_groups ?
                                    <div className={'tab-pane' + (stateProduct.active_tab === '/tab-specification' ? ' active' : '')}>
                                        <table className="table table-bordered">
                                            {stateProduct.attribute_groups.map(attribute_group => {
                                                return [
                                                    <thead>
                                                    <tr>
                                                        <td colSpan="2"><strong>{attribute_group.name}</strong></td>
                                                    </tr>
                                                    </thead>,
                                                    <tbody>
                                                    {attribute_group.attribute.map(attribute => {
                                                        return (
                                                            <tr>
                                                                <td>{attribute.name}</td>
                                                                <td>{attribute.text}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                    </tbody>
                                                ]
                                            })}
                                        </table>
                                    </div> : ''}
                                {stateProduct.review_status ?
                                    <div className={'tab-pane' + (stateProduct.active_tab === '/tab-review' ? ' active' : '')}>
                                        <form className="form-horizontal" id="form-review">
                                            <div id="review"></div>
                                            <h2>{stateProduct.text_write}</h2>
                                            {stateProduct.review_guest ?
                                                [<div className="form-group required">
                                                    <div className="col-sm-12">
                                                        <label className="control-label" htmlFor="input-name">{stateProduct.entry_name}</label>
                                                        <input type="text" name="name" value={stateProduct.customer_name} id="input-name" className="form-control"/>
                                                    </div>
                                                </div>,
                                                    <div className="form-group required">
                                                        <div className="col-sm-12">
                                                            <label className="control-label" htmlFor="input-review">{stateProduct.entry_review}</label>
                                                            <textarea name="text" rows="5" id="input-review" className="form-control"></textarea>
                                                            <div className="help-block">{stateProduct.text_note}</div>
                                                        </div>
                                                    </div>,
                                                    <div className="form-group required">
                                                        <div className="col-sm-12">
                                                            <label className="control-label">{stateProduct.entry_rating}</label>
                                                            &nbsp;&nbsp;&nbsp; {stateProduct.entry_bad}&nbsp;
                                                            <input type="radio" name="rating" value="1"/>
                                                            &nbsp;
                                                            <input type="radio" name="rating" value="2"/>
                                                            &nbsp;
                                                            <input type="radio" name="rating" value="3"/>
                                                            &nbsp;
                                                            <input type="radio" name="rating" value="4"/>
                                                            &nbsp;
                                                            <input type="radio" name="rating" value="5"/>
                                                            &nbsp;{stateProduct.entry_good}</div>
                                                    </div>,
                                                    stateProduct.captcha,
                                                    <div className="buttons clearfix">
                                                        <div className="pull-right">
                                                            <button type="button" id="button-review" data-loading-text="{{ text_loading }}" className="btn btn-primary">{stateProduct.button_continue}</button>
                                                        </div>
                                                    </div>] : stateProduct.text_login}
                                        </form>
                                    </div> : ''}
                            </div>
                        </div>
                        <div className={productClassVal2}>
                            <div className="btn-group">
                                <button type="button" data-toggle="tooltip" className="btn btn-default" title={stateProduct.button_wishlist} onClick="wishlist.add('{{ product_id }}');"><i className="fa fa-heart"></i></button>
                                <button type="button" data-toggle="tooltip" className="btn btn-default" title={stateProduct.button_compare} onClick="compare.add('{{ product_id }}');"><i className="fa fa-exchange"></i></button>
                            </div>
                            <h1>{ReactHtmlParser(stateProduct.heading_title)}</h1>
                            <ul class="list-unstyled">
                                {stateProduct.manufacturer ? <li>{stateProduct.text_manufacturer} <a href={stateProduct.manufacturers}>{stateProduct.manufacturer}</a></li> : ''}
                                <li>{stateProduct.text_model} {stateProduct.model}</li>
                                {stateProduct.reward ? <li>{stateProduct.text_reward} {stateProduct.reward}</li> : ''}
                                <li>{stateProduct.text_stock} {stateProduct.stock}</li>
                            </ul>
                            {stateProduct.price ?
                                <ul className="list-unstyled">
                                    {!stateProduct.special ? <li><h2>{stateProduct.price}</h2></li> : [<li><span style={{textDecoration: 'line-through'}}>{stateProduct.price}</span></li>, <li><h2>{stateProduct.special}</h2></li>]}
                                    {stateProduct.tax ? <li>{stateProduct.text_tax} {stateProduct.tax}</li> : ''}
                                    {stateProduct.points ? <li>{stateProduct.text_points} {stateProduct.points}</li> : ''}
                                    {stateProduct.discounts ? [
                                        <li>
                                            <hr/>
                                        </li>,
                                        stateProduct.discounts.map(discount => {
                                            return <li>{discount.quantity}{stateProduct.text_discount}{discount.price}</li>
                                        })] : ''}
                                </ul> : ''}
                            <div id="product">
                                {stateProduct.options ? [
                                    <hr/>,
                                    <h3>{stateProduct.text_option}</h3>,
                                    stateProduct.options.map(option => {
                                        if (option.type === 'select') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label" htmlFor={'input-option' + option.product_option_id}>{option.name}</label>
                                                <select name={'option[' + option.product_option_id + ']'} id={'input-option' + option.product_option_id} className="form-control">
                                                    <option value="">{stateProduct.text_select}</option>
                                                    {option.product_option_value.map(option_value => {
                                                        return <option value={option_value.product_option_value_id}>{option_value.name}{option_value.price ? '(' + option_value.price_prefix + option_value.price + ')' : ''} </option>
                                                    })}
                                                </select>
                                            </div>
                                        );
                                        if (option.type === 'radio') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label">{option.name}</label>
                                                <div id="input-option{{ option.product_option_id }}">
                                                    {option.product_option_value.map(option_value => {
                                                        return (
                                                            <div className="radio">
                                                                <label>
                                                                    <input type="radio" name="option[{{ option.product_option_id }}]" value="{{ option_value.product_option_value_id }}"/>
                                                                    {option_value.image ? <img src={option_value.image} alt={option_value.name + option_value.price ? option_value.price_prefix + option_value.price : ''} className="img-thumbnail"/> : ''}
                                                                    {option_value.name}
                                                                    {option_value.price ? '(' + option_value.price_prefix + option_value.price + ')' : ''}
                                                                </label>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        );
                                        if (option.type === 'checkbox') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label">{option.name}</label>
                                                <div id="input-option{{ option.product_option_id }}">
                                                    {option.product_option_value.map(option_value => {
                                                        return (
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="option[{{ option.product_option_id }}]" value="{{ option_value.product_option_value_id }}"/>
                                                                    {option_value.image ? <img src={option_value.image} alt={option_value.name + option_value.price ? option_value.price_prefix + option_value.price : ''} className="img-thumbnail"/> : ''}
                                                                    {option_value.name}
                                                                    {option_value.price ? '(' + option_value.price_prefix + option_value.price + ')' : ''}
                                                                </label>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        );
                                        if (option.type === 'text') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label" htmlFor={'input-option' + option.product_option_id}>{option.name}</label>
                                                <input type="text" name="option[{{ option.product_option_id }}]" value={option.value} placeholder={option.name} id="input-option{{ option.product_option_id }}" className="form-control"/>
                                            </div>
                                        );
                                        if (option.type === 'textarea') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label" htmlFor="input-option{{ option.product_option_id }}">{option.name}</label>
                                                <textarea name="option[{{ option.product_option_id }}]" rows="5" placeholder={option.name} id="input-option{{ option.product_option_id }}" className="form-control">{option.value}</textarea>
                                            </div>
                                        );
                                        if (option.type === 'file') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label">{option.name}</label>
                                                <button type="button" id="button-upload{{ option.product_option_id }}" data-loading-text="{{ text_loading }}" className="btn btn-default btn-block"><i className="fa fa-upload"></i> {stateProduct.button_upload}</button>
                                                <input type="hidden" name="option[{{ option.product_option_id }}]" value="" id="input-option{{ option.product_option_id }}"/>
                                            </div>
                                        );
                                        if (option.type === 'date') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label" htmlFor="input-option{{ option.product_option_id }}">{option.name}</label>
                                                <div className="input-group date">
                                                    <input type="text" name="option[{{ option.product_option_id }}]" value={option.value} data-date-format="YYYY-MM-DD" id="input-option{{ option.product_option_id }}" className="form-control"/>
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default" type="button"><i className="fa fa-calendar"></i></button>
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                        if (option.type === 'datetime') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label" htmlFor="input-option{{ option.product_option_id }}">{option.name}</label>
                                                <div className="input-group datetime">
                                                    <input type="text" name="option[{{ option.product_option_id }}]" value={option.value} data-date-format="YYYY-MM-DD HH:mm" id="input-option{{ option.product_option_id }}" className="form-control"/>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                        if (option.type === 'time') return (
                                            <div className={'form-group' + (option.required ? ' required' : '')}>
                                                <label className="control-label" htmlFor="input-option{{ option.product_option_id }}">{option.name}</label>
                                                <div className="input-group time">
                                                    <input type="text" name="option[{{ option.product_option_id }}]" value={option.value} data-date-format="HH:mm" id="input-option{{ option.product_option_id }}" className="form-control"/>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-default"><i className="fa fa-calendar"></i></button>
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                        return null;
                                    })
                                ] : ''}
                                {(stateProduct.recurrings && stateProduct.recurrings.length > 0) ? [
                                    <hr/>,
                                    <h3>{stateProduct.text_payment_recurring}</h3>,
                                    <div className="form-group required">
                                        <select name="recurring_id" className="form-control">
                                            <option value="">{stateProduct.text_select}</option>
                                            {stateProduct.recurrings.map(recurring => <option value={recurring.recurring_id}>{recurring.name}</option>)}
                                        </select>
                                        <div className="help-block" id="recurring-description"></div>
                                    </div>
                                ] : ''}
                                <div className="form-group">
                                    <label className="control-label" for="input-quantity">{stateProduct.entry_qty}</label>
                                    <input type="text" name="quantity" value={stateProduct.minimum} size="2" id="input-quantity" className="form-control"/>
                                    <input type="hidden" name="product_id" value={stateProduct.product_id}/>
                                    <br/>
                                    <button type="button" id="button-cart" data-loading-text={stateProduct.text_loading} className="btn btn-primary btn-lg btn-block">{stateProduct.button_cart}</button>
                                </div>
                                {stateProduct.minimum > 1 ? <div className="alert alert-info"><i className="fa fa-info-circle"></i> {stateProduct.text_minimum}</div> : ''}
                            </div>
                            {stateProduct.review_status ?
                                <div className="rating">
                                    <p>
                                        {[1, 2, 3, 4, 5].map(i => {
                                            if (stateProduct.rating < i) {
                                                return <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
                                            } else {
                                                return <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
                                            }
                                        })} <a href="/" onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;">{stateProduct.reviews}</a> / <a href="/" onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;">{stateProduct.text_write}</a>
                                    </p>
                                    <hr/>
                                    {/*-- AddThis Button BEGIN --*/}
                                    <div className="addthis_toolbox addthis_default_style" data-url={stateProduct.share}>
                                        {/*{<a className="addthis_button_facebook_like" fb:like:layout="button_count"></a>}*/}
                                        <a href="/" className="addthis_button_facebook_like"> </a>
                                        <a href="/" className="addthis_button_tweet"> </a> <a href="/" className="addthis_button_pinterest_pinit"> </a> <a href="/" className="addthis_counter addthis_pill_style"> </a>
                                    </div>
                                    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-515eeaf54693130e"></script>
                                    {/*-- AddThis Button END --*/}
                                </div> : ''}
                        </div>
                    </div>
                    {stateProduct.products ?
                        [
                            <h3>{stateProduct.text_related}</h3>,
                            <div className="row">
                                {stateProduct.products.map((product, i) => {
                                    return [
                                        <div className={productClassVal}>
                                            <div className="product-thumb transition">
                                                <div className="image"><a href={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-responsive"/></a></div>
                                                <div className="caption">
                                                    <h4><a href={product.href}>{product.name}</a></h4>
                                                    <p>{product.description}</p>
                                                    {product.rating ?
                                                        <div className="rating">
                                                            {[1, 2, 3, 4, 5].map(j => {
                                                                if (product.rating < j) {
                                                                    return <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
                                                                } else {
                                                                    return <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span>
                                                                }
                                                            })}
                                                        </div>
                                                        : ''}
                                                    {product.price ?
                                                        <p className="price">
                                                            {!product.special ? product.price : [<span className="price-new">{product.special}</span>, <span className="price-old">{product.price}</span>]}
                                                            {product.tax ? <span className="price-tax">{stateProduct.text_tax} {product.tax}</span> : ''}
                                                        </p>
                                                        : ''}
                                                </div>
                                                <div className="button-group">
                                                    <button type="button" onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"><span className="hidden-xs hidden-sm hidden-md">{stateProduct.button_cart}</span> <i className="fa fa-shopping-cart"></i></button>
                                                    <button type="button" data-toggle="tooltip" title={stateProduct.button_wishlist} onClick="wishlist.add('{{ product.product_id }}');"><i className="fa fa-heart"></i></button>
                                                    <button type="button" data-toggle="tooltip" title={stateProduct.button_compare} onClick="compare.add('{{ product.product_id }}');"><i className="fa fa-exchange"></i></button>
                                                </div>
                                            </div>
                                        </div>,
                                        ((stateProduct.column_left) && (stateProduct.column_right) && ((i + 1) % 2 === 0)) ?
                                            <div className="clearfix visible-md visible-sm"></div> :
                                            (((stateProduct.column_left) || (stateProduct.column_right)) && ((i + 1) % 3 === 0)) ?
                                                <div className="clearfix visible-md"></div> : ((i + 1) % 4 === 0) ?
                                                <div className="clearfix visible-md"></div> : ''
                                    ];
                                })}
                            </div>
                        ]
                        : ''}
                    {stateProduct.tags ?
                        <p>
                            {stateProduct.text_tags}
                            {stateProduct.tags.map((tag, i, tags) => {
                                if (i < (tags.length - 1)) {
                                    return <a href={tag.href}>{tag.tag}</a>
                                } else {
                                    return <a href={tag.href}>{tag.tag}</a>
                                }
                            })}
                        </p>
                        : ''}
                    {stateProduct.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {stateProduct.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Product;