import {commonAPI} from "../../api/api";

const SET_HOME_STATE = 'SET-HOME-STATE';

let initialState = {
    column_left: {
        modules: []
    },
    column_right: {
        modules: []
    },
    content_bottom: null,
    content_top: null,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_STATE:
            return {
                ...state,
                ...action.state,
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_HOME_STATE, state});

export const setHeaderState = () => async (dispatch) => {
    let response = await commonAPI.getHome();
    dispatch(setStateActionCreator(response.data));
};

export default homeReducer;