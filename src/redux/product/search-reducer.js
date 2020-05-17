import {productAPI} from "../../api/api";

const SET_PRODUCT_SEARCH_STATE = 'SET-PRODUCT-SEARCH-STATE';

let initialState = {
    breadcrumbs: [],
    sorts: [],
    limits: [],
    categories: []
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_SEARCH_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_PRODUCT_SEARCH_STATE, state});

export const setSearchStateThunkCreator = (search, categoryId, subCategory, description) => async (dispatch) => {
    let response = await productAPI.getSearch(search, categoryId, subCategory, description);
    dispatch(setStateActionCreator(response.data));
};

export default searchReducer;