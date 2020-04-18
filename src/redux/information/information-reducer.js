import React from "react";
import {informationAPI} from "../../api/api";

const SET_INFORMATION_STATE = 'SET-INFORMATION-STATE';

let initialState = {
    breadcrumbs: [
    ],
    heading_title: '',
    description: ''
};

const informationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFORMATION_STATE:
            let stateCopy = {...action.state};
            stateCopy.breadcrumbs = [...stateCopy.breadcrumbs];
            return stateCopy;
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_INFORMATION_STATE, state});

export const setInformationState = () => async (dispatch) => {
    let response = await informationAPI.getInformation(6);
    dispatch(setStateActionCreator(response.data));
};

export default informationReducer;