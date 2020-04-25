import React from 'react';
import Language from "../Language";
import Cart from "../Cart";
import {NavLink} from "react-router-dom";
import CurrencyContainer from "../Currency/CurrencyContainer";
import {Dropdown} from "react-bootstrap";
import SearchContainer from "../Search/SearchContainer";
import MenuContainer from "../Menu/MenuContainer";

const Header = (props) => {
    let stateHeader = props.state.headerReducer;
    return (
        <>
            <nav id="top">
                <div className="container">
                    <CurrencyContainer/>
                    <Language state={props.state.languageReducer}/>
                    <div id="top-links" className="nav pull-right">
                        <ul className="list-inline">
                            <li><NavLink to={stateHeader.contact}><i className={'fa fa-phone'}></i></NavLink> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.telephone}</span></li>
                            <Dropdown alignRight as="li" ref={(el) => {
                                if (el) {
                                    el.style.setProperty('display', 'inline-block', 'important')
                                }
                            }}>
                                <Dropdown.Toggle as="span" href={stateHeader.account} title={stateHeader.text_account}><i className={'fa fa-user'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_account}</span> <span className={'caret'}></span></Dropdown.Toggle>
                                <Dropdown.Menu className={'dropdown-menu dropdown-menu-right'}>
                                    <Account state={stateHeader}/>
                                </Dropdown.Menu>
                            </Dropdown>
                            <li><NavLink to={stateHeader.wishlist} id="wishlist-total" title={stateHeader.text_wishlist}><i className={'fa  fa-heart'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_wishlist}</span></NavLink></li>
                            <li><NavLink to={stateHeader.shopping_cart} title={stateHeader.text_shopping_cart}><i className={'fa fa-shopping-cart'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_shopping_cart}</span></NavLink></li>
                            <li><NavLink to={stateHeader.checkout} title={stateHeader.text_checkout}><i className={'fa fa-share'}></i> <span className={'hidden-xs hidden-sm hidden-md'}>{stateHeader.text_checkout}</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-sm-4'}>
                            <div id="logo">
                                <Logo state={stateHeader}/>
                            </div>
                        </div>
                        <div className={'col-sm-5'}>
                            <SearchContainer/>
                        </div>
                        <div className={'col-sm-3'}>
                            <Cart state={props.state.cartReducer}/>
                        </div>
                    </div>
                </div>
            </header>
            <MenuContainer/>
        </>
    )
};

const Account = (props) => {
    if (props.state.logged) {
        return [
            <li key={props.state.text_account}><NavLink to={props.state.account}>{props.state.text_account}</NavLink></li>,
            <li key={props.state.text_order}><NavLink to={props.state.order}>{props.state.text_order}</NavLink></li>,
            <li key={props.state.text_transaction}><NavLink to={props.state.transaction}>{props.state.text_transaction}</NavLink></li>,
            <li key={props.state.text_download}><NavLink to={props.state.download}>{props.state.text_download}</NavLink></li>,
            <li key={props.state.text_logout}><NavLink to={props.state.logout}>{props.state.text_logout}</NavLink></li>,
        ];
    } else {
        return [
            <li key={props.state.text_register}><NavLink to={props.state.register}>{props.state.text_register}</NavLink></li>,
            <li key={props.state.text_login}><NavLink to={props.state.login}>{props.state.text_login}</NavLink></li>
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