import {commonAPI} from "../../api/api";

const SET_HEADER_STATE = 'SET-HEADER-STATE';

let initialState = {
    contact: '',
    telephone: '',
    account: '',
    text_account: '',
    wishlist: '',
    text_wishlist: '',
    shopping_cart: '',
    text_shopping_cart: '',
    checkout: '',
    text_checkout: '',
    logged: false,
    register: '',
    text_register: '',
    login: '',
    text_login: '',
    logo: false,
    home: '/',
    name: '',
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_STATE:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_HEADER_STATE, state});

export const setHeaderStateThunkCreator = () => async (dispatch) => {
    let response = await commonAPI.getHeader();
    dispatch(setStateActionCreator(response.data));
};

export default headerReducer;