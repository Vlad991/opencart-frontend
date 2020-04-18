import {commonAPI} from "../../api/api";

const SET_HEADER_STATE = 'SET-HEADER-STATE';

let initialState = {
    contact: 'http://localhost:3000/index.php?route=information/contact',
    telephone: '123456789',
    account: 'http://localhost:3000/index.php?route=account/account',
    text_account: 'My Account',
    wishlist: 'http://localhost:3000/index.php?route=account/wishlist',
    text_wishlist: 'Wish List (0)',
    shopping_cart: 'http://localhost:3000/index.php?route=checkout/cart',
    text_shopping_cart: 'Shopping Cart',
    checkout: 'http://localhost:3000/index.php?route=checkout/checkout',
    text_checkout: 'Checkout',
    logged: false,
    register: 'http://localhost:3000/index.php?route=account/register',
    text_register: 'Register',
    login: 'http://localhost:3000/index.php?route=account/login',
    text_login: 'Login',
    logo: false,
    home: '/',
    name: 'Your Store'
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_STATE:
            state = action.state;
            return state;
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_HEADER_STATE, state});

export const setHeaderState = () => async (dispatch) => {
    let response = await commonAPI.getHeader();
    dispatch(setStateActionCreator(response.data));
};

export default headerReducer;