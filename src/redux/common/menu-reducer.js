import {commonAPI} from "../../api/api";

const SET_MENU_STATE = 'SET-MENU-STATE';

let initialState = {
    text_category: '',
    text_all: '',
    categories: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_STATE:
            return {
                ...state,
                ...action.state,
                categories: [...action.state.categories]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_MENU_STATE, state});

export const setMenuStateThunkCreator = () => async (dispatch) => {
    let response = await commonAPI.getMenu();
    dispatch(setStateActionCreator(response.data));
};

export default menuReducer;