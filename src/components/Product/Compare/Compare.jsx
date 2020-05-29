import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Compare = (props) => {
    let stateCompare = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }

    return (
        <div id="product-compare" className="container">
            <ul className="breadcrumb">
                {stateCompare.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            {stateCompare.success ?
                <div className="alert alert-success alert-dismissible"><i className="fa fa-check-circle"></i> {stateCompare.success} <button type="button" className="close" data-dismiss="alert">&times;</button>
                </div> : ''}
            <div className="row">
                {props.state.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {props.state.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h1>{ReactHtmlParser(stateCompare.heading_title)}</h1>
                    {stateCompare.products && Object.keys(stateCompare.products).length > 0 ?
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <td colSpan={Object.keys(stateCompare.products).length + 1}><strong>{stateCompare.text_product}</strong></td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{stateCompare.text_name}</td>
                                {Object.values(stateCompare.products).map(product => <td><NavLink to={product.href}><strong>{ReactHtmlParser(product.name)}</strong></NavLink></td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_image}</td>
                                {Object.values(stateCompare.products).map(product => <td className="text-center">{product.thumb ? <img src={product.thumb} alt={product.name} title={product.name} className="img-thumbnail"/> : ''}</td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_price}</td>
                                {Object.values(stateCompare.products).map(product => <td>
                                    {product.price ?
                                        (!product.special ? product.price : <><strike>{product.price}</strike> {product.special}</>) : ''}
                                </td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_model}</td>
                                {Object.values(stateCompare.products).map(product => <td>{product.model}</td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_manufacturer}</td>
                                {Object.values(stateCompare.products).map(product => <td>{product.manufacturer}</td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_availability}</td>
                                {Object.values(stateCompare.products).map(product => <td>{product.availability}</td>)}
                            </tr>
                            {stateCompare.review_status ?
                                <tr>
                                    <td>{stateCompare.text_rating}</td>
                                    {Object.values(stateCompare.products).map(product => <td className="rating">
                                        {[1, 2, 3, 4, 5].map(i => {
                                            if (product.rating < i) {
                                                return <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>;
                                            } else {
                                                return <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                            }
                                        })}
                                        <br/>
                                        {product.reviews}
                                    </td>)}
                                </tr> : ''}
                            <tr>
                                <td>{stateCompare.text_summary}</td>
                                {Object.values(stateCompare.products).map(product => <td className="description">{ReactHtmlParser(product.description)}</td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_weight}</td>
                                {Object.values(stateCompare.products).map(product => <td>{product.weight}</td>)}
                            </tr>
                            <tr>
                                <td>{stateCompare.text_dimension}</td>
                                {Object.values(stateCompare.products).map(product => <td>{product.length} x {product.width} x {product.height}</td>)}
                            </tr>
                            </tbody>

                            {Object.values(stateCompare.attribute_groups).map(attribute_group => {
                                return (<>
                                    <thead>
                                    <tr>
                                        <td colSpan={Object.keys(stateCompare.products).length + 1}><strong>{attribute_group.name}</strong></td>
                                    </tr>
                                    </thead>
                                    {Object.entries(attribute_group.attribute).map(([key, attribute]) => {
                                        return (
                                            <tbody>
                                            <tr>
                                                <td>{attribute.name}</td>
                                                {Object.values(stateCompare.products).map(product => {
                                                    if (product.attribute[key]) {
                                                        return <td> {product.attribute[key]}</td>;
                                                    } else {
                                                        return <td></td>;
                                                    }
                                                })}
                                            </tr>
                                            </tbody>
                                        );
                                    })}
                                </>);
                            })}
                            <tr>
                                <td></td>
                                {Object.values(stateCompare.products).map(product => {
                                    return (
                                        <td>
                                            <input type="button" value={stateCompare.button_cart} className="btn btn-primary btn-block" onClick="cart.add('{{ product.product_id }}', '{{ product.minimum }}');"/>
                                            <a href={product.remove} className="btn btn-danger btn-block">{stateCompare.button_remove}</a>
                                        </td>
                                    );
                                })}
                            </tr>
                        </table> :
                        <>
                            <p>{ReactHtmlParser(stateCompare.text_empty)}</p>
                            <div className="buttons">
                                <div className="pull-right"><a href={stateCompare.continue} className="btn btn-default">{stateCompare.button_continue}</a></div>
                            </div>
                        </>}
                    {props.state.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {props.state.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Compare;