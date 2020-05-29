import {productAPI} from "../../api/api";

const SET_CATEGORY_STATE = 'SET-CATEGORY-STATE';
const SET_CATEGORY_DISPLAY = 'SET-CATEGORY-DISPLAY';

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
    sorts: [{href: '#', text: ''}],
    text_limit: '',
    limits: [{href: '#', text: ''}],
    text_compare: '',
    products: [],
    text_empty: '',
    button_continue: '',
    button_cart: '',
    display: 'list'
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
        case SET_CATEGORY_DISPLAY:
            return {
                ...state,
                display: action.display,
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CATEGORY_STATE, state});
export const setDisplayActionCreator = (display) => ({type: SET_CATEGORY_DISPLAY, display});

export const setCategoryStateThunkCreator = (firstLevelId, secondLevelId, sort, order, limit) => async (dispatch) => {
    let response = await productAPI.getCategory(firstLevelId, secondLevelId, sort, order, limit);
    dispatch(setStateActionCreator(response.data));
    let display = localStorage.getItem('display');
    if (display) {
        dispatch(setDisplayActionCreator(display));
    }
};

export const setCategoryDisplayThunkCreator = (display) => async (dispatch) => {
    localStorage.setItem('display', display);
    dispatch(setDisplayActionCreator(display));
};

export default categoryReducer;