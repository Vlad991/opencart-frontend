import {informationAPI} from "../../api/api";

const SET_CONTACT_STATE = 'SET-CONTACT-STATE';
const DO_CONTACT = 'DO-CONTACT';
const DO_CONTACT_SUCCESS_REDIRECT = 'DO-CONTACT-SUCCESS-REDIRECT';

let initialState = {
    breadcrumbs: [],
    heading_title: '',
    text_location: '',
    store: '',
    address: '',
    text_telephone: '',
    telephone: '',
    text_contact: '',
    entry_name: '',
    entry_email: '',
    entry_enquiry: '',
    button_submit: '',
    doSuccessRedirect: false
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        case DO_CONTACT:
            return {
                ...state,
                ...action.data,
                breadcrumbs: [...action.data.breadcrumbs]
            };
        case DO_CONTACT_SUCCESS_REDIRECT:
            return {
                ...state,
                doSuccessRedirect: action.doRedirect
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CONTACT_STATE, state});
export const doContactActionCreator = (data) => ({type: DO_CONTACT, data});
export const doContactSuccessRedirect = (doRedirect) => ({type: DO_CONTACT_SUCCESS_REDIRECT, doRedirect});

export const setContactStateThunkCreator = () => async (dispatch) => {
    let response = await informationAPI.getContact();
    dispatch(setStateActionCreator(response.data));
};

export const doContactThunkCreator = (data) => async (dispatch) => {
    let response = await informationAPI.doContact(data);
    if (response.request.responseURL === 'http://localhost:8888/OpenCartBackend/index.php?route=information/contact') {
        dispatch(doContactActionCreator(response.data));
    } else {
        dispatch(doContactSuccessRedirect(true));
    }
};

export default contactReducer;