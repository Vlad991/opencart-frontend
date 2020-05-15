import {commonAPI} from "../../api/api";

const SET_FOOTER_STATE = 'SET-FOOTER-STATE';

let initialState = {
    text_information: '',
    informations: [],
    text_service: '',
    contact: '',
    text_contact: '',
    return: '/',
    text_return: '',
    sitemap: '',
    text_sitemap: '',
    text_extra: '',
    manufacturer: '',
    text_manufacturer: '',
    voucher: '',
    text_voucher: '',
    affiliate: '',
    text_affiliate: '',
    special: '',
    text_special: '',
    account: '',
    text_account: '',
    order: '',
    text_order: '',
    wishlist: '',
    text_wishlist: '',
    newsletter: '',
    text_newsletter: '',
    powered: ''
};

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOOTER_STATE:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_FOOTER_STATE, state});

export const setFooterState = () => async (dispatch) => {
    let response = await commonAPI.getFooter();
    dispatch(setStateActionCreator(response.data));
};

export default footerReducer;