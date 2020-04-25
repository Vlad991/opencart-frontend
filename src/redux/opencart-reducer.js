const SET_OPENCART_STATE = 'SET-OPENCART-STATE';

let initialState = {
    isFetching: true,
    headerIsFetching: true
};

const opencartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPENCART_STATE:
            return {...action.state};
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_OPENCART_STATE, state});

export default opencartReducer;