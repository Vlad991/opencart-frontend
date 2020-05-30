import {accountAPI} from "../../api/api";

const SET_RETURN_ADD_STATE = 'SET-RETURN-ADD-STATE';
const ADD_RETURN = 'ADD-RETURN';
const DO_RETURN_SUCCESS_REDIRECT = 'DO-RETURN-SUCCESS-REDIRECT';

let initialState = {
    breadcrumbs: [],
    continue: '',
    return_reasons: [],
    back: '',
    doSuccessRedirect: false
};

const returnAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RETURN_ADD_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
            };
        case ADD_RETURN:
            return {
                ...state,
                ...action.data
            };
        case DO_RETURN_SUCCESS_REDIRECT:
            return {
                ...state,
                doSuccessRedirect: action.doRedirect
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_RETURN_ADD_STATE, state});
export const addReturnActionCreator = (data) => ({type: ADD_RETURN, data});
export const doReturnSuccessRedirect = (doRedirect) => ({type: DO_RETURN_SUCCESS_REDIRECT, doRedirect});

export const setReturnAddStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getReturnAdd();
    console.log(response.data);
    dispatch(setStateActionCreator(response.data));
};

export const addReturnThunkCreator = (data) => async (dispatch) => {
    let response = await accountAPI.addReturn(data);
    if (response.request.responseURL === 'http://localhost:8888/OpenCartBackend/index.php?route=account/return/add') {
        dispatch(addReturnActionCreator(response.data));
    } else {
        dispatch(doReturnSuccessRedirect(true));
    }
};

export default returnAddReducer;