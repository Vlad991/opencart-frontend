import {accountAPI} from "../../api/api";

const SET_RETURN_INFO_STATE = 'SET-RETURN-INFO-STATE';

let initialState = {
    breadcrumbs: [],
    continue: ''
};

const returnInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RETURN_INFO_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_RETURN_INFO_STATE, state});

export const setReturnInfoStateThunkCreator = (id) => async (dispatch) => {
    let response = await accountAPI.getReturnInfo(id);
    dispatch(setStateActionCreator(response.data));
};

export default returnInfoReducer;