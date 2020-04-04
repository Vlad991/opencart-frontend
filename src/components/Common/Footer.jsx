import React from 'react';

const Footer = (props) => {
    let stateFooter = props.state.footer;
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {stateFooter.informations ?
                        <div className="col-sm-3">
                            <h5>{stateFooter.text_information}</h5>
                            <ul className="list-unstyled">
                                {stateFooter.informations.map(information => <li><a href={ information.href }>{information.title}</a></li>)}
                            </ul>
                        </div>
                        : ''}
                    <div className="col-sm-3">
                        <h5>{stateFooter.text_service}</h5>
                        <ul className="list-unstyled">
                            <li><a href={ stateFooter.contact }>{stateFooter.text_contact}</a></li>
                            <li><a href={ stateFooter.return }>{stateFooter.text_return}</a></li>
                            <li><a href={ stateFooter.sitemap }>{stateFooter.text_sitemap}</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>{stateFooter.text_extra}</h5>
                        <ul className="list-unstyled">
                            <li><a href={ stateFooter.manufacturer }>{stateFooter.text_manufacturer}</a></li>
                            <li><a href={ stateFooter.voucher }>{stateFooter.text_voucher}</a></li>
                            <li><a href={ stateFooter.affiliate }>{stateFooter.text_affiliate}</a></li>
                            <li><a href={ stateFooter.special }>{stateFooter.text_special}</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>{stateFooter.text_account}</h5>
                        <ul className="list-unstyled">
                            <li><a href={ stateFooter.account }>{stateFooter.text_account}</a></li>
                            <li><a href={ stateFooter.order }>{stateFooter.text_order}</a></li>
                            <li><a href={ stateFooter.wishlist }>{stateFooter.text_wishlist}</a></li>
                            <li><a href={ stateFooter.newsletter }>{stateFooter.text_newsletter}</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p>Powered By <a href="http://www.opencart.com">OpenCart</a><br/> Your Store © 2020</p>
            </div>
        </footer>
    )
};

export default Footer;