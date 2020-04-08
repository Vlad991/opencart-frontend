import {combineReducers, createStore} from "redux";
import headerReducer from "./common/header-reducer";
import footerReducer from "./common/footer-reducer";
import currencyReducer from "./common/currency-reducer";
import cartReducer from "./common/cart-reducer";
import homeReducer from "./common/home-reducer";
import languageReducer from "./common/language-reducer";
import menuReducer from "./common/menu-reducer";
import searchReducer from "./common/search-reducer";
import carouselReducer from "./extension/module/carousel-reducer";
import categoryReducer from "./extension/module/category-reducer";
import featuredReducer from "./extension/module/featured-reducer";
import slideshowReducer from "./extension/module/slideshow-reducer";
import productCategoryReducer from "./product/category-reducer";
import productReducer from "./product/product-reducer";

let reducers = combineReducers({
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
    extensionReducer: combineReducers({
        moduleReducer: combineReducers({
            carouselReducer,
            categoryReducer,
            featuredReducer,
            slideshowReducer
        }),
        // paymentReducer: combineReducers({})
    }),
    productReducer: combineReducers({
        categoryReducer: productCategoryReducer,
        productReducer
    }),
});

let store = createStore(reducers);

export default store;