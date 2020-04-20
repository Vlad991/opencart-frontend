import React from "react";
import {informationAPI} from "../../api/api";

const SET_CONTACT_STATE = 'SET-CONTACT-STATE';

let initialState = {
    breadcrumbs: [],
    heading_title: '',
    text_location: '',
    store: '',
    address: '',
    text_telephone: '',
    telephone: '',
    text_contact: 'Contact Form',
    entry_name: 'Your Name',
    entry_email: 'E-Mail Address',
    entry_enquiry: 'Enquiry',
    button_submit: 'Submit'
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_STATE:
            let stateCopy = {...action.state};
            stateCopy.breadcrumbs = [...stateCopy.breadcrumbs];
            return stateCopy;
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CONTACT_STATE, state});

export const setContactState = () => async (dispatch) => {
    let response = await informationAPI.getContact();
    dispatch(setStateActionCreator(response.data));
};

export default contactReducer;