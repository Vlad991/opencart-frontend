import {accountAPI} from "../../api/api";

const SET_RETURN_STATE = 'SET-RETURN-STATE';

let initialState = {
    breadcrumbs: [],
    continue: ''
};

const returnReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RETURN_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_RETURN_STATE, state});

export const setReturnStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getReturn();
    dispatch(setStateActionCreator(response.data));
};

export default returnReducer;