const SET_PRODUCT_STATE = 'SET-PRODUCT-STATE';

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
    button_cart: ''
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_STATE:
            return {
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
                images: [...action.state.images],
                attribute_groups: [...action.state.attribute_groups],
                products: [...action.state.products]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_PRODUCT_STATE, state});
export default productReducer;