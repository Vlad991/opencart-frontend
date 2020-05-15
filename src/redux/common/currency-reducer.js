import {commonAPI} from "../../api/api";

const SET_CURRENCY_STATE = 'SET-CURRENCY-STATE';
const SET_CURRENCY = 'SET-CURRENCY';

let initialState = {
    action: '',
    text_currency: '',
    redirect: '',
    currencies: [],
    code: ''
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                code: action.currencyCode
            };
        case SET_CURRENCY_STATE:
            return {
                ...state,
                ...action.state,
                currencies: [...action.state.currencies]
            };
        default:
            return state;
    }
};

export const setCurrencyActionCreator = (code) => ({type: SET_CURRENCY, currencyCode: code});
export const setStateActionCreator = (state) => ({type: SET_CURRENCY_STATE, state});

export const setCurrencyStateThunkCreator = () => async (dispatch) => {
    let response = await commonAPI.getCurrency();
    dispatch(setStateActionCreator(response.data));
}

export const setCurrencyThunkCreator = (code) => async (dispatch) => {
    let response = await commonAPI.setCurrency(code);
    dispatch(setCurrencyActionCreator(response.data));
}

export default currencyReducer;