let initialState = {
    text_information: 'Information',
    informations: [
        {
            href: '/information/information',
            title: 'About Us'
        },
        {
            href: '/information/information',
            title: 'Delivery Information'
        },
        {
            href: '/information/information',
            title: 'Privacy Policy'
        },
        {
            href: '/information/information',
            title: 'Terms & Conditions'
        },
    ],
    text_service: 'Customer Service',
    contact: '/information/contact',
    text_contact: 'Contact Us',
    return: '/information/information',
    text_return: 'Returns',
    sitemap: '#',
    text_sitemap: 'Site Map',
    text_extra: 'Extras',
    manufacturer: '/information/information',
    text_manufacturer: 'Brands',
    voucher: '/information/information',
    text_voucher: 'Gift Certificates',
    affiliate: '/information/information',
    text_affiliate: 'Affiliate',
    special: '/information/information',
    text_special: 'Specials',
    account: '/information/information',
    text_account: 'My Account',
    order: '/information/information',
    text_order: 'Order History',
    wishlist: '/information/information',
    text_wishlist: 'Wish List',
    newsletter: '/information/information',
    text_newsletter: 'Newsletter',
    powered: ''
};

const footerReducer = (state = initialState, action) => {
    return state;
};

export default footerReducer;