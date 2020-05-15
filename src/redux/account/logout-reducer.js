import {accountAPI} from "../../api/api";

const SET_LOGOUT_STATE = 'SET-LOGOUT-STATE';

let initialState = {
    breadcrumbs: [],
};

const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGOUT_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_LOGOUT_STATE, state});

export const setLogoutStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getLogout();
    console.log(response);
    dispatch(setStateActionCreator(response.data));
};

export default logoutReducer;