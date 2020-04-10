import React from "react";

let initialState = {
    breadcrumbs: [
        {
            href: '/',
            text: <i class="fa fa-home"></i>
        },
        {
            href: '/information/information',
            text: 'About us'
        }
    ],
    heading_title: 'About Us',
    description: 'About Us'
};

const informationReducer = (state = initialState, action) => {
    return state;
};

export default informationReducer;