import {informationAPI} from "../../api/api";

const SET_CONTACT_SUCCESS_STATE = 'SET-CONTACT-SUCCESS-STATE';

let initialState = {
    breadcrumbs: [],
    heading_title: '',
    description: '',
    continue: ''
};

const contactSuccessReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_SUCCESS_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CONTACT_SUCCESS_STATE, state});

export const setContactSuccessStateThunkCreator = () => async (dispatch) => {
    let response = await informationAPI.getSuccess();
    dispatch(setStateActionCreator(response.data));
};

export default contactSuccessReducer;