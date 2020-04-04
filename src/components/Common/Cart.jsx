import React from 'react';

const Cart = (props) => {
    return (
        <div id="cart" className="btn-group btn-block">
            <button type="button" data-toggle="dropdown" data-loading-text={props.state.text_loading} className="btn btn-inverse btn-block btn-lg dropdown-toggle"><i className="fa fa-shopping-cart"></i> <span id="cart-total">{props.state.text_items}</span></button>
            <ul className="dropdown-menu pull-right">
                <CartDropdown state={props.state}/>
            </ul>
        </div>
    );
};

const CartDropdown = (props) => {
    if (props.state.products || props.state.vouchers) {
        return [
            <li>
                <table className="table table-striped">
                    {props.state.products.map(product => {
                        return (
                            <tr>
                                <td className="text-center">{product.thumb ? <a href={product.href}><img src={product.thumb} alt={product.name} title={product.name} className="img-thumbnail"/></a> : ''}</td>
                                <td className="text-left"><a href={product.href}>{product.name}</a>
                                    {product.option ? product.option.map(option => {
                                        return (
                                            <br/>
                                            - <small>{option.name} {option.value}</small>
                                        )
                                    }) : ''}
                                    {product.recurring ? <br/>
                                        - <small>{props.state.text_recurring} {product.recurring}</small> : ''}
                                </td>
                                <td className="text-right">x {product.quantity}</td>
                                <td className="text-right">{product.total}</td>
                                <td className="text-center">
                                    <button type="button" onClick="cart.remove('{{ product.cart_id }}');" title={props.state.button_remove} className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                    {props.state.vouchers.map(voucher => {
                        return (
                            <tr>
                                <td className="text-center"></td>
                                <td className="text-left">{voucher.description}</td>
                                <td className="text-right">x&nbsp;1</td>
                                <td className="text-right">{voucher.amount}</td>
                                <td className="text-center text-danger">
                                    <button type="button" onClick="voucher.remove('{{ voucher.key }}');" title={ props.state.button_remove } className="btn btn-danger btn-xs"><i className="fa fa-times"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </li>,
            <li>
                <div>
                    <table className="table table-bordered">
                        {props.state.totals.map(total => {
                            return (
                                <tr>
                                    <td className="text-right"><strong>{total.title}</strong></td>
                                    <td className="text-right">{total.text}</td>
                                </tr>
                            )
                        })}
                    </table>
                    <p className="text-right"><a href={ props.state.cart }><strong><i className="fa fa-shopping-cart"></i> {props.state.text_cart}</strong></a>&nbsp;&nbsp;&nbsp;<a href={ props.state.checkout }><strong><i className="fa fa-share"></i> {props.state.text_checkout}</strong></a></p>
                </div>
            </li>
        ];
    } else {
        return (
            <li>
                <p className="text-center">{props.state.text_empty}</p>
            </li>
        );
    }
};

export default Cart;