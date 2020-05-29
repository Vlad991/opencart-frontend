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
import productSearchReducer from "./product/search-reducer";
import informationReducer from "./information/information-reducer";
import contactReducer from "./information/contact-reducer";
import opencartReducer from "./opencart-reducer";
import thunkMiddleware from "redux-thunk";
import registerReducer from "./account/register-reducer";
import successReducer from "./account/success-reducer";
import { reducer as formReducer } from 'redux-form';
import loginReducer from "./account/login-reducer";
import logoutReducer from "./account/logout-reducer";
import accountReducer from "./account/account-reducer";
import wishListReducer from "./account/wishlist-reducer";
import checkoutCartReducer from "./checkout/cart-reducer";
import compareReducer from "./product/compare-reducer";

let reducers = combineReducers({
    opencartReducer,
    accountReducer: combineReducers({
        registerReducer,
        successReducer,
        loginReducer,
        logoutReducer,
        accountReducer,
        wishListReducer
    }),
    checkoutReducer: combineReducers({
        cartReducer: checkoutCartReducer
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
        compareReducer,
        productReducer,
        searchReducer: productSearchReducer
    }),
    form: formReducer,
});

const composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;