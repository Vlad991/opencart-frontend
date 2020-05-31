import {productAPI} from "../../api/api";

const SET_MANUFACTURER_STATE = 'SET-MANUFACTURER-STATE';

let initialState = {
    breadcrumbs: [],
    categories: {},
    continue: ''
};

const manufacturerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANUFACTURER_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_MANUFACTURER_STATE, state});

export const setManufacturerStateThunkCreator = () => async (dispatch) => {
    let response = await productAPI.getManufacturer();
    dispatch(setStateActionCreator(response.data));
};

export default manufacturerReducer;