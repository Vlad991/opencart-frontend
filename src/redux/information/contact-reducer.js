import React from "react";

let initialState = {
    breadcrumbs: [
        {
            href: '/',
            text: <i class="fa fa-home"></i>
        },
        {
            href: '/information/contact',
            text: 'Contact Us'
        }
    ],
    heading_title: 'Contact Us',
    text_location: 'Our Location',
    store: 'Your Store',
    address: 'Address 1',
    text_telephone: 'Telephone',
    telephone: '123456789',
    text_contact: 'Contact Form',
    entry_name: 'Your Name',
    entry_email: 'E-Mail Address',
    entry_enquiry: 'Enquiry',
    button_submit: 'Submit'
};

const contactReducer = (state = initialState, action) => {
    return state;
};

export default contactReducer;