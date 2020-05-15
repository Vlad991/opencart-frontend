import {informationAPI} from "../../api/api";

const SET_INFORMATION_STATE = 'SET-INFORMATION-STATE';

let initialState = {
    breadcrumbs: [],
    heading_title: '',
    description: ''
};

const informationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFORMATION_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_INFORMATION_STATE, state});

export const setInformationStateThunkCreator = (id) => async (dispatch) => {
    let response = await informationAPI.getInformation(id);
    dispatch(setStateActionCreator(response.data));
};

export default informationReducer;