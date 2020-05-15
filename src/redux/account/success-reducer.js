import {accountAPI} from "../../api/api";

const SET_SUCCESS_STATE = 'SET-SUCCESS-STATE';

let initialState = {
    breadcrumbs: [],
};

const successReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUCCESS_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_SUCCESS_STATE, state});

export const setSuccessStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getSuccess();
    dispatch(setStateActionCreator(response.data));
};

export default successReducer;