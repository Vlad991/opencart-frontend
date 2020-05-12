import React from 'react';
import {NavLink} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

const Footer = (props) => {
    let stateFooter = props.state;
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {stateFooter.informations ?
                        <div className="col-sm-3">
                            <h5>{stateFooter.text_information}</h5>
                            <ul className="list-unstyled">
                                {stateFooter.informations.map(information => {
                                    if (information.id === 5) {
                                        return <li key={information.title}><NavLink to={information.href}>{ReactHtmlParser(information.title)}</NavLink></li>
                                    } else {
                                        return <li key={information.title}><NavLink to={information.href}>{information.title}</NavLink></li>
                                    }
                                })}
                            </ul>
                        </div>
                        : ''}
                    <div className="col-sm-3">
                        <h5>{stateFooter.text_service}</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to={stateFooter.contact}>{stateFooter.text_contact}</NavLink></li>
                            <li><NavLink to={stateFooter.return}>{stateFooter.text_return}</NavLink></li>
                            <li><NavLink to={stateFooter.sitemap}>{stateFooter.text_sitemap}</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>{stateFooter.text_extra}</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to={stateFooter.manufacturer}>{stateFooter.text_manufacturer}</NavLink></li>
                            <li><NavLink to={stateFooter.voucher}>{stateFooter.text_voucher}</NavLink></li>
                            <li><NavLink to={stateFooter.affiliate}>{stateFooter.text_affiliate}</NavLink></li>
                            <li><NavLink to={stateFooter.special}>{stateFooter.text_special}</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>{stateFooter.text_account}</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to={stateFooter.account}>{stateFooter.text_account}</NavLink></li>
                            <li><NavLink to={stateFooter.order}>{stateFooter.text_order}</NavLink></li>
                            <li><NavLink to={stateFooter.wishlist}>{stateFooter.text_wishlist}</NavLink></li>
                            <li><NavLink to={stateFooter.newsletter}>{stateFooter.text_newsletter}</NavLink></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p>{ReactHtmlParser(stateFooter.powered)}</p>
            </div>
        </footer>
    )
};

export default Footer;