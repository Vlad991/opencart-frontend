const SET_MODULES_STATE = 'SET-MODULES-STATE';

let initialState = [
    {}, {}, {}
];

const modulesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODULES_STATE:
            state = action.state;
            return state;
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_MODULES_STATE, state});

export const setModulesState = () => async (dispatch) => {
    //let response = await commonAPI.getHome();
    //dispatch(setStateActionCreator(response.data));
};

export default modulesReducer();