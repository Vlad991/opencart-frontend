import {checkoutAPI} from "../../api/api";

const SET_CHECKOUT_CART_STATE = 'SET-CHECKOUT-CART-STATE';

let initialState = {
    breadcrumbs: [],
    continue: '',
    checkout: '',
    products: [],
    vouchers: [],
    totals: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHECKOUT_CART_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CHECKOUT_CART_STATE, state});

export const setCartStateThunkCreator = () => async (dispatch) => {
    let response = await checkoutAPI.getCart();
    console.log(response);
    dispatch(setStateActionCreator(response.data));
};

export default cartReducer;