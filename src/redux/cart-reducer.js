const SET_CART_STATE = 'SET-CART-STATE';

let initialState = {
    products: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_STATE:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CART_STATE, state});

export default cartReducer;