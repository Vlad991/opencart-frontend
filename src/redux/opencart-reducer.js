import {cartAPI} from "../api/api";
import {addSuccessMessageActionCreator} from "./common/home-reducer";

const SET_OPENCART_STATE = 'SET-OPENCART-STATE';
const SET_GLOBAL_CURRENCY = 'SET-GLOBAL-CURRENCY';
const SET_GLOBAL_CART_PRODUCTS = 'SET-GLOBAL-CART-PRODUCTS';

let initialState = {
    isFetching: true,
    headerIsFetching: true,
    globalCurrency: '',
    globalCartProducts: []
};

const opencartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPENCART_STATE:
            return {
                ...state,
                ...action.state
            };
        case SET_GLOBAL_CURRENCY:
            return {
                ...state,
                globalCurrency: action.currency
            };
        case SET_GLOBAL_CART_PRODUCTS:
            return {
                ...state,
                globalCartProducts: [...action.products]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_OPENCART_STATE, state});
export const setGlobalCurrencyActionCreator = (currency) => ({type: SET_GLOBAL_CURRENCY, currency})
export const setGlobalCartProductsActionCreator = (products) => ({type: SET_GLOBAL_CART_PRODUCTS, products})

export const cartAddThunkCreator = (product_id, quantity) => async (dispatch) => {
    let addResponse = await cartAPI.add(product_id, quantity);
    dispatch(addSuccessMessageActionCreator(addResponse.data.success));
    let infoResponse = await cartAPI.info();
    dispatch(setGlobalCartProductsActionCreator(infoResponse.data.products));
};

export default opencartReducer;