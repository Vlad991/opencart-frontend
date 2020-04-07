import React from 'react';
import Currency from "./Currency";
import Language from "./Language";
import Search from "./Search";
import Cart from "./Cart";
import Menu from "./Menu";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let stateHeader = props.state.headerReducer;
    return [
        <nav id={'top'}>
            <div className={'container'}>
                <Currency state={props.state.currencyReducer}/>
                <Language state={props.state.languageReducer}/>
                <div id={'top-links'} className={'nav pull-right'}>
                    <ul className={'list-inline'}>
                        <li><a href={stateHeader.contact}><i className={'fa fa-phone'}></i></a> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.telephone}</span></li>
                        <li className={'dropdown'}>
                            <a href={stateHeader.account} title={stateHeader.text_account} className={'dropdown-toggle'} data-toggle="dropdown"><i className={'fa fa-user'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_account}</span> <span className={'caret'}></span></a>
                            <ul className={'dropdown-menu dropdown-menu-right'}>
                                <Account state={stateHeader}/>
                            </ul>
                        </li>
                        <li><a href={stateHeader.wishlist} id="wishlist-total" title={stateHeader.text_wishlist}><i className={'fa  fa-heart'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_wishlist}</span></a></li>
                        <li><a href={stateHeader.shopping_cart} title={stateHeader.text_shopping_cart}><i className={'fa fa-shopping-cart'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_shopping_cart}</span></a></li>
                        <li><a href={stateHeader.checkout} title={stateHeader.text_checkout}><i className={'fa fa-share'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_checkout}</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>,
        <header>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-4'}>
                        <div id="logo">
                            <Logo state={stateHeader}/>
                        </div>
                    </div>
                    <div className={'col-sm-5'}>
                        <Search state={props.state.searchReducer}/>
                    </div>
                    <div className={'col-sm-3'}>
                        <Cart state={props.state.cartReducer}/>
                    </div>
                </div>
            </div>
        </header>,
        <Menu state={props.state.menuReducer}/>
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
            <NavLink to={props.state.home}>
                <img src={props.state.logo} title={props.state.name} alt={props.state.name} className={'img-responsive'}/>
            </NavLink>
        );
    } else {
        return (
            <h1><NavLink to={props.state.home}>{props.state.name}</NavLink></h1>
        );
    }
};

export default Header;