import React from 'react';
import '../../javascript/bootstrap/css/bootstrap.css';
import s from '../../stylesheet/Stylesheet.module.css';

const Header = (props) => {
    return [
        <nav id={s.top}>
            <div className={s.container}>
                {/*{{currency}}*/}
                {/*{{language}}*/}
                <div id={s['top-links']} className={s.nav + ' ' + 'pull-right'}>
                    <ul className={'list-inline'}>
                        <li><a href={props.contact}><i className={s.fa + ' ' + s['fa-phone']}></i></a> <span className={s['hidden-xs'] + ' ' + s['hidden-sm'] + ' ' + s['hidden-md']}>{props.telephone}</span></li>
                        <li className={s.dropdown}>
                            <a href={props.account} title={props.text_account} className={s['dropdown-toggle']} data-toggle="dropdown"><i className={s.fa + ' ' + s['fa-user']}></i> <span className={s['hidden-xs'] + ' ' + s['hidden-sm'] + ' ' + s['hidden-md']}>{props.text_account}</span> <span className={s.caret}></span></a>
                            <ul className={s['dropdown-menu'] + ' ' + s['dropdown-menu-right']}>
                                {/*{% if logged %}*/}
                                <li><a href={props.account}>{props.text_account}</a></li>
                                <li><a href={props.order}>{props.text_order}</a></li>
                                <li><a href={props.transaction}>{props.text_transaction}</a></li>
                                <li><a href={props.download}>{props.text_download}</a></li>
                                <li><a href={props.logout}>{props.text_logout}</a></li>
                                {/*{% else %}*/}
                                <li><a href={props.register}>{props.text_register}</a></li>
                                <li><a href={props.login}>{props.text_login}</a></li>
                                {/*{% endif %}*/}
                            </ul>
                        </li>
                        <li><a href={props.wishlist} id="wishlist-total" title={props.text_wishlist}><i className={s.fa + ' ' + s['fa-heart']}></i> <span className={s['hidden-xs'] + ' ' + s['hidden-sm'] + ' ' + s['hidden-md']}>{props.text_wishlist}</span></a></li>
                        <li><a href={props.shopping_cart} title={props.text_shopping_cart}><i className={s.fa + ' ' + s['fa-shopping-cart']}></i> <span className={s['hidden-xs'] + ' ' + s['hidden-sm'] + ' ' + s['hidden-md']}>{props.text_shopping_cart}</span></a></li>
                        <li><a href={props.checkout} title={props.text_checkout}><i className={s.fa + ' ' + s['fa-share']}></i> <span className={s['hidden-xs'] + ' ' + s['hidden-sm'] + ' ' + s['hidden-md']}>{props.text_checkout}</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>,
        <header>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s['col-sm-4']}>
                        <div id="logo">
                            {/*{% if logo %}*/}
                            <a href={props.home}>
                                <img src={props.logo} title={props.name} alt={props.name} className={s['img-responsive']}/>
                            </a>
                            {/*{% else %}*/}
                            <h1><a href={props.home}>{props.name}</a></h1>
                            {/*{% endif %}*/}
                        </div>
                    </div>
                    <div className={s['col-sm-5']}>{props.search}</div>
                    <div className={s['col-sm-3']}>{props.cart}</div>
                </div>
            </div>
        </header>
    ]
};

export default Header;