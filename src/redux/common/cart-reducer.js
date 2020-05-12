const SET_CART_STATE = 'SET-CART-STATE';

let initialState = {
    text_loading: '',
    text_items: '',
    text_empty: ''
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_STATE:
            return {...action.state};
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CART_STATE, state});
export default cartReducer;