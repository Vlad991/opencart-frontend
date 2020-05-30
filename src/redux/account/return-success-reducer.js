import {accountAPI} from "../../api/api";

const SET_RETURN_SUCCESS_STATE = 'SET-RETURN-SUCCESS-STATE';

let initialState = {
    breadcrumbs: [],
    continue: ''
};

const returnSuccessReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RETURN_SUCCESS_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_RETURN_SUCCESS_STATE, state});

export const setReturnSuccessStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getReturnSuccess();
    dispatch(setStateActionCreator(response.data));
};

export default returnSuccessReducer;