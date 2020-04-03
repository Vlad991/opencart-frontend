import React from 'react';
import '../../javascript/bootstrap/css/bootstrap.css';
import '../../stylesheet/stylesheet.css';
import Currency from "./Currency";

const Header = (props) => {
    return [
        <nav id={'top'}>
            <div className={'container'}>
                <Currency/>
                {/*{{language}}*/}
                <div id={'top-links'} className={'nav pull-right'}>
                    <ul className={'list-inline'}>
                        <li><a href={props.state.contact}><i className={'fa fa-phone'}></i></a> <span className={'hidden-xs hidden-sm hidden-md'}>{props.state.telephone}</span></li>
                        <li className={'dropdown'}>
                            <a href={props.state.account} title={props.state.text_account} className={'dropdown-toggle'} data-toggle="dropdown"><i className={'fa fa-user'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{props.state.text_account}</span> <span className={'caret'}></span></a>
                            <ul className={'dropdown-menu dropdown-menu-right'}>
                                <Account state={props.state}/>
                            </ul>
                        </li>
                        <li><a href={props.state.wishlist} id="wishlist-total" title={props.state.text_wishlist}><i className={'fa  fa-heart'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{props.state.text_wishlist}</span></a></li>
                        <li><a href={props.state.shopping_cart} title={props.state.text_shopping_cart}><i className={'fa fa-shopping-cart'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{props.state.text_shopping_cart}</span></a></li>
                        <li><a href={props.state.checkout} title={props.state.text_checkout}><i className={'fa fa-share'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{props.state.text_checkout}</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>,
        <header>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-4'}>
                        <div id="logo">
                            <Logo state={props.state}/>
                        </div>
                    </div>
                    <div className={'col-sm-5'}>{props.state.search}</div>
                    <div className={'col-sm-3'}>{props.state.cart}</div>
                </div>
            </div>
        </header>
    ]
};

const Account = (props) => {
    if (props.state.logged) {
        return [
            <li><a href={props.state.account}>{props.state.text_account}</a></li>,
            <li><a href={props.state.order}>{props.state.text_order}</a></li>,
            <li><a href={props.state.transaction}>{props.state.text_transaction}</a></li>,
            <li><a href={props.state.download}>{props.state.text_download}</a></li>,
            <li><a href={props.state.logout}>{props.state.text_logout}</a></li>,
        ];
    } else {
        return [
            <li><a href={props.state.register}>{props.state.text_register}</a></li>,
            <li><a href={props.state.login}>{props.state.text_login}</a></li>
        ];
    }
};

const Logo = (props) => {
    if (props.state.logo) {
        return (
            <a href={props.state.home}>
                <img src={props.state.logo} title={props.state.name} alt={props.state.name} className={'img-responsive'}/>
            </a>
        );
    } else {
        return (
            <h1><a href={props.state.home}>{props.state.name}</a></h1>
        );
    }
};

export default Header;