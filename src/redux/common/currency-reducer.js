const SET_CURRENCY = 'SET-CURRENCY';

let initialState = {
    action: 'http://localhost:3000/index.php?route=common/currency/currency',
    text_currency: 'Currency',
    redirect: 'http://localhost:3000/index.php?route=common/home',
    currencies: [
        {
            code: 'EUR',
            symbol_left: '€',
            title: 'Euro'
        },
        {
            code: 'GBR',
            symbol_left: '£',
            title: 'Pound Sterling'
        },
        {
            code: 'USD',
            symbol_left: '$',
            title: 'US Dollar'
        }
    ],
    code: 'GBR'
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            state.code = action.currencyCode;
            return state;
        default:
            return state;
    }
};

export const setCurrencyActionCreator = (code) => ({type: SET_CURRENCY, currencyCode: code});
export default currencyReducer;