import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css';
//import 'swiper/css/swiper.css'
import './stylesheet/vendor/jquery/swiper/css/opencart.css';
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Common/Header/HeaderContainer";
import FooterContainer from "./components/Common/Footer/FooterContainer";
import HomeContainer from "./components/Common/Home/HomeContainer";
import InformationContainer from "./components/Information/Informtation/InformationContainer";
import ContactContainer from "./components/Information/Contact/ContactContainer";
import CategoryContainer from "./components/Product/Category/CategoryContainer";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import {setStateActionCreator} from "./redux/opencart-reducer";
import ProductContainer from "./components/Product/Product/ProductContainer";
import RegisterContainer from "./components/Account/Register/RegisterContainer";
import SuccessContainer from "./components/Account/SuccessContainer";
import LoginContainer from "./components/Account/Login/LoginContainer";
import LogoutContainer from "./components/Account/LogoutContainer";
import AccountContainer from "./components/Account/Account/AccountContainer";
import WishListContainer from "./components/Account/WishList/WishListContainer";
import CartContainer from "./components/Checkout/CartContainer";
import SearchContainer from "./components/Product/Search/SearchContainer";
import CompareContainer from "./components/Product/Compare/CompareContainer";
import ContactSuccessContainer from "./components/Information/Contact/ContactSuccessContainer";
import ReturnContainer from "./components/Account/Return/ReturnContainer";
import ReturnInfoContainer from "./components/Account/ReturnInfo/ReturnInfoContainer";
import ReturnAddContainer from "./components/Account/ReturnAdd/ReturnAddContainer";

class App extends Component {
    render() {
        return (
            <>
                {/*{this.props.state.opencartReducer.isFetching ? <img src={preloader}/> : null}*/}
                <HeaderContainer/>
                <Route exact path='/' render={() => <HomeContainer/>}/>
                <Route path='/account/register' render={() => <RegisterContainer/>}/>
                <Route path='/account/success' render={() => <SuccessContainer/>}/>
                <Route path='/account/login' render={() => <LoginContainer/>}/>
                <Route path='/account/logout' render={() => <LogoutContainer/>}/>
                <Route path='/account/account' render={() => <AccountContainer/>}/>
                <Route path='/account/wishlist' render={() => <WishListContainer/>}/>
                <Route exact path='/account/return' render={() => <ReturnContainer/>}/>
                <Route exact path='/account/return/add' render={() => <ReturnAddContainer/>}/>
                <Route exact path='/account/return/info/:id' render={() => <ReturnInfoContainer/>}/>
                <Route exact path='/information/information/:id' render={() => <InformationContainer/>}/>
                <Route exact path='/information/contact' render={() => <ContactContainer/>}/>
                <Route exact path='/information/contact/success' render={() => <ContactSuccessContainer/>}/>
                <Route exact path='/checkout/cart' render={() => <CartContainer/>}/>
                <Route exact path='/product/category/:first/:second' render={() => <CategoryContainer/>}/>
                <Route exact path='/product/compare' render={() => <CompareContainer/>}/>
                <Route exact path='/product/category/:first' render={() => <CategoryContainer/>}/>
                <Route exact path='/product/product/:id' render={() => <ProductContainer/>}/>
                <Route exact path='/product/search' render={() => <SearchContainer/>}/>
                <Route exact path='/product/search/:search' render={() => <SearchContainer/>}/>
                <Route exact path='/product/search/:search/:categoryId' render={() => <SearchContainer/>}/>
                <Route exact path='/product/search/:search/:categoryId/:subCategory' render={() => <SearchContainer/>}/>
                <Route exact path='/product/search/:search/:categoryId/:subCategory/:description' render={() => <SearchContainer/>}/>
                <FooterContainer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
})

let AppContainer = connect(mapStateToProps, {setStateActionCreator})(App);

const OpenCartApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default OpenCartApp;