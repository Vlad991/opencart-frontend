const SET_MENU_STATE = 'SET-MENU-STATE';

let initialState = {
    text_category: '',
    text_all: '',
    categories: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_STATE:
            let categories = action.state.categories;
            categories.forEach(c => c.name = c.name.replace('amp;', ''));
            return {...action.state, categories: [...categories]};
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_MENU_STATE, state});
export default menuReducer;