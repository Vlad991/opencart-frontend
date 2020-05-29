import {accountAPI} from "../../api/api";

const SET_LOGIN_STATE = 'SET-LOGIN-STATE';
const DO_LOGIN = 'DO-LOGIN';

let initialState = {
    breadcrumbs: [],
    forgotten: '',

};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
            };
        case DO_LOGIN:
            return {
                ...state,
                ...action.data,
                breadcrumbs: [...action.data.breadcrumbs],
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_LOGIN_STATE, state});
export const doLoginActionCreator = (data) => ({type: DO_LOGIN, data});

export const setLoginStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getLogin();
    dispatch(setStateActionCreator(response.data));
};

export const doLoginThunkCreator = (data) => async (dispatch) => {
    let response = await accountAPI.doLogin(data);
    if (response.request.responseURL === 'http://localhost:8888/OpenCartBackend/index.php?route=account/login') {
        dispatch(doLoginActionCreator(response.data));
    } else {
        //dispatch(doRegisterSuccessRedirect(true));
    }
};

export default loginReducer;