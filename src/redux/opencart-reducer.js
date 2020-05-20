const SET_OPENCART_STATE = 'SET-OPENCART-STATE';
const SET_GLOBAL_CURRENCY = 'SET-GLOBAL-CURRENCY';

let initialState = {
    isFetching: true,
    headerIsFetching: true,
    globalCurrency: ''
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
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_OPENCART_STATE, state});
export const setGlobalCurrency = (currency) => ({type: SET_GLOBAL_CURRENCY, currency})

export default opencartReducer;