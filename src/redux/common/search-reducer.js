const INPUT_SEARCH_TEXT = 'INPUT-SEARCH-TEXT';

let initialState = {
    text_search: 'Search',
    search: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_SEARCH_TEXT:
            state.search = action.searchText;
            return state;
        default:
            return state;
    }
};

export const setSearchTextActionCreator = (search) => ({type: INPUT_SEARCH_TEXT, searchText: search});
export default searchReducer;