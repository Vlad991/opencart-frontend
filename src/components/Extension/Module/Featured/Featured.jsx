import React from 'react';
import {NavLink} from "react-router-dom";

const Featured = (props) => {
    let cart = {
        add() {
        }
    };
    let wishlist = {
        add() {
        }
    };
    let compare = {
        add() {
        }
    };
    return [
        <h3 key={props.state.heading_title}>{props.state.heading_title}</h3>,
        <div key={'row'} className="row">
            {props.state.products.map(product => {
                return (
                    <div key={product.name} className="product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="product-thumb transition">
                            <div className="image"><NavLink to={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-responsive"/></NavLink></div>
                            <div className="caption">
                                <h4><NavLink to={product.href}>{product.name}</NavLink></h4>
                                <p>{product.description}</p>
                                {product.rating ?
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map(i => {
                                            if (product.rating < i) return <span key={i} className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span>
                                            else return <span key={i} className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span>
                                        })}
                                    </div>
                                    : ''}
                                {product.price ?
                                    <p className="price">
                                        {!product.special ? product.price : [<span key={product.special} className="price-new">{product.special}</span>, <span key={product.price} className="price-old">{product.price}</span>]}
                                        {product.tax ? <span className="price-tax">{props.state.text_tax} {product.tax}</span> : ''}
                                    </p>
                                    : ''}
                            </div>
                            <div className="button-group">
                                <button type="button" onClick={cart.add(product.product_id)}><i className="fa fa-shopping-cart"></i> <span className="hidden-xs hidden-sm hidden-md">{props.state.button_cart}</span></button>
                                <button type="button" data-toggle="tooltip" title={props.state.button_wishlist} onClick={wishlist.add(product.product_id)}><i className="fa fa-heart"></i></button>
                                <button type="button" data-toggle="tooltip" title={props.state.button_compare} onClick={compare.add(product.product_id)}><i className="fa fa-exchange"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    ]
};

export default Featured;