import {productAPI} from "../../api/api";

const SET_COMPARE_STATE = 'SET-COMPARE-STATE';

let initialState = {
    breadcrumbs: [],
    attribute_groups: {},
    products: {}
};

const compareReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPARE_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
                attribute_groups: {...action.state.attribute_groups},
                products: {...action.state.products}
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_COMPARE_STATE, state});

export const setCompareStateThunkCreator = () => async (dispatch) => {
    let response = await productAPI.getCompare();
    console.log(response.data);
    dispatch(setStateActionCreator(response.data));
};

export default compareReducer;