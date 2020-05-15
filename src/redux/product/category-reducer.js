import {productAPI} from "../../api/api";

const SET_CATEGORY_STATE = 'SET-CATEGORY-STATE';

let initialState = {
    breadcrumbs: [],
    column_left: {
        modules: [{categories: []}]
    },
    heading_title: '',
    thumb: '',
    description: '',
    text_refine: '',
    categories: [],
    text_sort: '',
    sorts: [{href: '#', text: 'Default'}, {href: '#', text: 'Name (A-Z)'}, {href: '#', text: 'Name (Z-A)'},],
    text_limit: '',
    limits: [{href: '#', text: '5'}, {href: '#', text: '10'}, {href: '#', text: '25'}],
    text_compare: '',
    products: [],
    text_empty: 'There are no products to list in this category.',
    button_continue: 'Continue',
    button_cart: 'Add to Cart'
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
                categories: [...action.state.categories],
                sorts: [...action.state.sorts],
                limits: [...action.state.limits],
                products: [...action.state.products]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CATEGORY_STATE, state});

export const setCategoryStateThunkCreator = (firstLevelId, secondLevelId) => async (dispatch) => {
    let response = await productAPI.getCategory(firstLevelId, secondLevelId);
    dispatch(setStateActionCreator(response.data));
};

export default categoryReducer;