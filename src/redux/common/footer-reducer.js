let initialState = {
    text_information: 'Information',
    informations: [
        {
            href: '#',
            title: 'About Us'
        },
        {
            href: '#',
            title: 'Delivery Information'
        },
        {
            href: '#',
            title: 'Privacy Policy'
        },
        {
            href: '#',
            title: 'Terms & Conditions'
        },
    ],
    text_service: 'Customer Service',
    contact: '#',
    text_contact: 'Contact Us',
    return: '#',
    text_return: 'Returns',
    sitemap: '#',
    text_sitemap: 'Site Map',
    text_extra: 'Extras',
    manufacturer: '#',
    text_manufacturer: 'Brands',
    voucher: '#',
    text_voucher: 'Gift Certificates',
    affiliate: '#',
    text_affiliate: 'Affiliate',
    special: '#',
    text_special: 'Specials',
    text_account: 'My Account',
    order: '#',
    text_order: 'Order History',
    wishlist: '#',
    text_wishlist: 'Wish List',
    newsletter: '#',
    text_newsletter: 'Newsletter',
    powered: ''
};

const footerReducer = (state = initialState, action) => {
    return state;
};

export default footerReducer;