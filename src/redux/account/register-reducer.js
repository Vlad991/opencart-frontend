import {accountAPI} from "../../api/api";

const SET_REGISTER_STATE = 'SET-REGISTER-STATE';
const DO_REGISTER = 'DO-REGISTER';

let initialState = {
    breadcrumbs: [],
    customer_groups: [],
    custom_fields: [],
    error_custom_field: [],
    register_custom_field: [],
    column_right: {
        modules: []
    },
    content_bottom: {
        modules: []
    },
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTER_STATE:
            return {
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
                customer_groups: [...action.state.customer_groups],
                custom_fields: [...action.state.custom_fields],
                error_custom_field: [...action.state.error_custom_field],
                register_custom_field: [...action.state.register_custom_field]
            };
        case DO_REGISTER:
            return {
                ...state,
                ...action.data,
                breadcrumbs: [...action.data.breadcrumbs],
                customer_groups: [...action.data.customer_groups],
                custom_fields: [...action.data.custom_fields],
                error_custom_field: [...action.data.error_custom_field],
                register_custom_field: [...action.data.register_custom_field]
            }
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_REGISTER_STATE, state});
export const doRegisterActionCreator = (data) => ({type: DO_REGISTER, data});

export const setRegisterStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getRegister();
    console.log(response.data);
    dispatch(setStateActionCreator(response.data));
};

export const doRegisterThunkCreator = (data) => async (dispatch) => {
    let response = await accountAPI.doRegister(data);
    console.log(response);
    dispatch(doRegisterActionCreator(response.data));
};

export default registerReducer;