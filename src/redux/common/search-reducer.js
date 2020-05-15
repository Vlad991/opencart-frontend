const INPUT_SEARCH_TEXT = 'INPUT-SEARCH-TEXT';
const SET_SEARCH_STATE = 'SET-SEARCH-STATE';

let initialState = {
    text_search: '',
    search: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_STATE:
            return {
                ...state,
                ...action.state
            };
        case INPUT_SEARCH_TEXT:
            return {
                ...state,
                search: action.searchText
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_SEARCH_STATE, state});
export const setSearchTextActionCreator = (search) => ({type: INPUT_SEARCH_TEXT, searchText: search});
export default searchReducer;