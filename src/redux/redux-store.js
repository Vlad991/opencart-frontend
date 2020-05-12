import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import headerReducer from "./common/header-reducer";
import footerReducer from "./common/footer-reducer";
import currencyReducer from "./common/currency-reducer";
import cartReducer from "./common/cart-reducer";
import homeReducer from "./common/home-reducer";
import languageReducer from "./common/language-reducer";
import menuReducer from "./common/menu-reducer";
import searchReducer from "./common/search-reducer";
import productCategoryReducer from "./product/category-reducer";
import productReducer from "./product/product-reducer";
import informationReducer from "./information/information-reducer";
import contactReducer from "./information/contact-reducer";
import opencartReducer from "./opencart-reducer";
import thunkMiddleware from "redux-thunk";
import registerReducer from "./account/register-reducer";

let reducers = combineReducers({
    opencartReducer,
    accountReducer: combineReducers({
        registerReducer
    }),
    commonReducer: combineReducers({
        headerReducer,
        currencyReducer,
        footerReducer,
        homeReducer,
        languageReducer,
        menuReducer,
        searchReducer,
        cartReducer
    }),
    informationReducer: combineReducers({
        informationReducer,
        contactReducer
    }),
    productReducer: combineReducers({
        categoryReducer: productCategoryReducer,
        productReducer
    }),
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;