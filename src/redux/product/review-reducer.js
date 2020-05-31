import {productAPI} from "../../api/api";

const SET_REVIEW_STATE = 'SET-REVIEW-STATE';

let initialState = {
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVIEW_STATE:
            return {
                ...state,
                ...action.state
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_REVIEW_STATE, state});

export const setReviewStateThunkCreator = (productId) => async (dispatch) => {
    let response = await productAPI.getProductReview(productId);
    dispatch(setStateActionCreator(response.data));
};

export default reviewReducer;