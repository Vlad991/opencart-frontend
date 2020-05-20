import {cartAPI, commonAPI} from "../../api/api";

const SET_CART_STATE = 'SET-CART-STATE';
const SET_CART_PRODUCTS_STATE = 'SET-CART-PRODUCTS-STATE';

let initialState = {
    text_loading: '',
    text_items: '',
    text_empty: '',
    products: null,
    vouchers: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_STATE:
            return {
                ...state,
                ...action.state,
                products: [...action.state.products],
                vouchers: [...action.state.vouchers]
            };
        case SET_CART_PRODUCTS_STATE:
            return {
                ...state,
                products: [...action.products]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CART_STATE, state});
export const setProductsActionCreator = (products) => ({type: SET_CART_STATE, products});

export const setCartStateThunkCreator = () => async (dispatch) => {
    let response = await commonAPI.getCart();
    dispatch(setStateActionCreator(response.data));
};

export const cartRemoveThunkCreator = (key) => async (dispatch) => {
    let removeResponse = await cartAPI.remove(key);
    let infoResponse = await cartAPI.info();
    dispatch(setStateActionCreator(infoResponse.data));
};

export default cartReducer;