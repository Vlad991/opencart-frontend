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
import RegisterContainer from "./components/Account/RegisterContainer";
import SuccessContainer from "./components/Account/SuccessContainer";
import LoginContainer from "./components/Account/LoginContainer";
import LogoutContainer from "./components/Account/LogoutContainer";
import AccountContainer from "./components/Account/AccountContainer";

class App extends Component {
    render() {
        return (
            <>
                {/*{this.props.state.opencartReducer.isFetching ? <img src={preloader}/> : null}*/}
                <HeaderContainer/>
                <Route exact path='/' render={() => <HomeContainer/>}/>
                <Route path='/account/register' render={() => <RegisterContainer />}/>
                <Route path='/account/success' render={() => <SuccessContainer />}/>
                <Route path='/account/login' render={() => <LoginContainer />}/>
                <Route path='/account/logout' render={() => <LogoutContainer />}/>
                <Route path='/account/account' render={() => <AccountContainer />}/>
                <Route exact path='/product/category/:first/:second' render={(props) => <CategoryContainer firstLevelId={props.match.params.first} secondLevelId={props.match.params.second}/>}/>
                <Route exact path='/product/category/:first' render={(props) => <CategoryContainer firstLevelId={props.match.params.first}/>}/>
                <Route exact path='/product/product/:first/:id' render={(props) => <ProductContainer firstLevelId={props.match.params.first} productId={props.match.params.id}/>}/>
                <Route exact path='/product/product/:first/:second/:id' render={(props) => <ProductContainer firstLevelId={props.match.params.first} secondLevelId={props.match.params.second} productId={props.match.params.id}/>}/>
                <Route path='/information/information/:id' render={(props) => <InformationContainer id={props.match.params.id}/>}/>
                <Route path='/information/contact' render={() => <ContactContainer state={this.props.state}/>}/>
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