import {productAPI} from "../../api/api";
import {doRegisterActionCreator, doRegisterSuccessRedirect} from "../account/register-reducer";

const SET_PRODUCT_STATE = 'SET-PRODUCT-STATE';
const SET_PRODUCT_TAB = 'SET-PRODUCT-TAB';
const WRITE_REVIEW = 'WRITE-REVIEW';

let initialState = {
    breadcrumbs: [],
    heading_title: '',
    thumb: '',
    images: [],
    text_manufacturer: '',
    manufacturer: '',
    text_model: '',
    model: '',
    text_reward: '',
    reward: '',
    text_stock: '',
    stock: '',
    price: '',
    tax: '',
    text_tax: '',
    entry_qty: '',
    minimum: 1,
    tab_description: '',
    tab_specification: '',
    attribute_groups: [],
    description: '',
    text_refine: '',
    text_compare: '',
    products: [],
    text_empty: '',
    button_continue: '',
    button_cart: '',
    active_tab: '/tab-description'
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
                images: [...action.state.images],
                attribute_groups: [...action.state.attribute_groups],
                products: [...action.state.products]
            };
        case SET_PRODUCT_TAB:
            return {
                ...state,
                active_tab: action.tab
            };
        case WRITE_REVIEW:
            return {
                ...state,
                ...action.state,
                error: action.state.error,
                success: action.state.success
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_PRODUCT_STATE, state});
export const setTabActionCreator = (tab) => ({type: SET_PRODUCT_TAB, tab});
export const writeReviewActionCreator = (state) => ({type: WRITE_REVIEW, state});

export const setProductStateThunkCreator = (productId) => async (dispatch) => {
    let response = await productAPI.getProduct(productId);
    dispatch(setStateActionCreator(response.data));
};

export const writeReviewThunkCreator = (productId, data) => async (dispatch) => {
    let response = await productAPI.writeReview(productId, data);
    dispatch(writeReviewActionCreator(response.data));
};

export default productReducer;