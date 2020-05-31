import {productAPI} from "../../api/api";

const SET_MANUFACTURER_INFO_STATE = 'SET-MANUFACTURER-INFO-STATE';

let initialState = {
    breadcrumbs: [],
    continue: ''
};

const manufacturerInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANUFACTURER_INFO_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_MANUFACTURER_INFO_STATE, state});

export const setManufacturerInfoStateThunkCreator = (id) => async (dispatch) => {
    let response = await productAPI.getManufacturerInfo(id);
    dispatch(setStateActionCreator(response.data));
};

export default manufacturerInfoReducer;