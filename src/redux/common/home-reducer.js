import {commonAPI} from "../../api/api";

const SET_HOME_STATE = 'SET-HOME-STATE';
const ADD_HOME_SUCCESS_MESSAGE = 'ADD-HOME-SUCCESS-MESSAGE';

let initialState = {
    column_left: {
        modules: []
    },
    column_right: {
        modules: []
    },
    content_bottom: null,
    content_top: null,
    successMessage: '',
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_STATE:
            return {
                ...state,
                ...action.state,
            };
        case ADD_HOME_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: action.message,
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_HOME_STATE, state});
export const addSuccessMessageActionCreator = (message) => ({type: ADD_HOME_SUCCESS_MESSAGE, message});

export const setHomeStateThunkCreator = () => async (dispatch) => {
    let response = await commonAPI.getHome();
    dispatch(setStateActionCreator(response.data));
};

export default homeReducer;