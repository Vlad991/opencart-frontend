import {accountAPI} from "../../api/api";

const SET_ACCOUNT_STATE = 'SET-ACCOUNT-STATE';

let initialState = {
    breadcrumbs: [],
    credit_cards: [],
    edit: '',
    password: '',
    address: '',
    wishlist: '',
    order: '',
    download: '',
    reward: '',
    return: '',
    transaction: '',
    recurring: '',
    affiliate: '',
    tracking: '',
    newsletter: ''
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_ACCOUNT_STATE, state});

export const setAccountStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getAccount();
    dispatch(setStateActionCreator(response.data));
};

export default accountReducer;