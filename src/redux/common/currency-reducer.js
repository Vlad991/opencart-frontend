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
    return state;
};

export default currencyReducer;