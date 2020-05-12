import {accountAPI} from "../../api/api";

const SET_REGISTER_STATE = 'SET-REGISTER-STATE';

let initialState = {
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTER_STATE:
            return {...action.state};
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_REGISTER_STATE, state});

export const setRegisterStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getRegister();
    dispatch(setStateActionCreator(response.data));
};

export default registerReducer;