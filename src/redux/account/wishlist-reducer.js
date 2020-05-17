import {accountAPI} from "../../api/api";

const SET_WISH_LIST_STATE = 'SET-WISH-LIST-STATE';

let initialState = {
    breadcrumbs: [],
    continue: ''
};

const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WISH_LIST_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_WISH_LIST_STATE, state});

export const setWishListStateThunkCreator = () => async (dispatch) => {
    let response = await accountAPI.getWishList();
    dispatch(setStateActionCreator(response.data));
};

export default wishListReducer;