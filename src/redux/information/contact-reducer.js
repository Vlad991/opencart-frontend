import {informationAPI} from "../../api/api";

const SET_CONTACT_STATE = 'SET-CONTACT-STATE';

let initialState = {
    breadcrumbs: [],
    heading_title: '',
    text_location: '',
    store: '',
    address: '',
    text_telephone: '',
    telephone: '',
    text_contact: '',
    entry_name: '',
    entry_email: '',
    entry_enquiry: '',
    button_submit: ''
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CONTACT_STATE, state});

export const setContactState = () => async (dispatch) => {
    let response = await informationAPI.getContact();
    dispatch(setStateActionCreator(response.data));
};

export default contactReducer;