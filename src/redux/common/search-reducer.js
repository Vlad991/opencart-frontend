import {commonAPI} from "../../api/api";

const INPUT_SEARCH_TEXT = 'INPUT-SEARCH-TEXT';
const SET_SEARCH_STATE = 'SET-SEARCH-STATE';
const DO_SEARCH_REDIRECT = 'DO-SEARCH-REDIRECT';

let initialState = {
    text_search: '',
    search: '',
    doRedirect: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_STATE:
            return {
                ...state,
                ...action.state,
                search: state.search
            };
        case INPUT_SEARCH_TEXT:
            return {
                ...state,
                search: action.searchText
            };
        case DO_SEARCH_REDIRECT:
            return {
                ...state,
                doRedirect: action.doRedirect
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_SEARCH_STATE, state});
export const setSearchTextActionCreator = (search) => ({type: INPUT_SEARCH_TEXT, searchText: search});
export const doSearchRedirectActionCreator = (doRedirect) => ({type: DO_SEARCH_REDIRECT, doRedirect});

export const setSearchStateThunkCreator = () => async (dispatch) => {
    let response = await commonAPI.getSearch();
    dispatch(setStateActionCreator(response.data));
};

export default searchReducer;