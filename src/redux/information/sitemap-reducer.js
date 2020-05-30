import {informationAPI} from "../../api/api";

const SET_SITEMAP_STATE = 'SET-SITEMAP-STATE';

let initialState = {
    breadcrumbs: [],
    categories: [],
    informations: [],
    special: '',
    account: '',
    edit: '',
    password: '',
    address: '',
    history: '',
    download: '',
    checkout: '',
    search: '',
    contact: ''
};

const sitemapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITEMAP_STATE:
            return {
                ...state,
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_SITEMAP_STATE, state});

export const setSitemapStateThunkCreator = () => async (dispatch) => {
    let response = await informationAPI.getSitemap();
    dispatch(setStateActionCreator(response.data));
};

export default sitemapReducer;