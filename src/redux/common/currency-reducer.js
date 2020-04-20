const SET_CURRENCY_STATE = 'SET-CURRENCY-STATE';
const SET_CURRENCY = 'SET-CURRENCY';

let initialState = {
    action: '',
    text_currency: '',
    redirect: '',
    currencies: [
        {
            code: '',
            symbol_left: '',
            title: ''
        }
    ],
    code: ''
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            state.code = action.currencyCode;
            return {...state, code: action.currencyCode};
        case SET_CURRENCY_STATE:
            let stateCopy = {...action.state};
            stateCopy.currencies = [...action.state.currencies];
            return stateCopy;
        default:
            return state;
    }
};

export const setCurrencyActionCreator = (code) => ({type: SET_CURRENCY, currencyCode: code});
export const setStateActionCreator = (state) => ({type: SET_CURRENCY_STATE, state});
export default currencyReducer;