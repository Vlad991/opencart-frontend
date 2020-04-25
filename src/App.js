import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css';
import './stylesheet/vendor/jquery/swiper/css/opencart.css';
import {BrowserRouter, Route} from "react-router-dom";
import Product from "./components/Product/Product";
import HeaderContainer from "./components/Common/Header/HeaderContainer";
import FooterContainer from "./components/Common/Footer/FooterContainer";
import HomeContainer from "./components/Common/Home/HomeContainer";
import InformationContainer from "./components/Information/Informtation/InformationContainer";
import ContactContainer from "./components/Information/Contact/ContactContainer";
import CategoryContainer from "./components/Product/Category/CategoryContainer";
import preloader from "./assets/image/preloader.svg";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import {setStateActionCreator} from "./redux/opencart-reducer";

class App extends Component {
    render() {
        return (
            <>
                {/*{this.props.state.opencartReducer.isFetching ? <img src={preloader}/> : null}*/}
                <HeaderContainer/>
                <Route exact path='/' render={() => <HomeContainer state={this.props.state} dispatch={this.props.dispatch}/>}/>
                <Route exact path='/product/category/:first/:second' render={(props) => <CategoryContainer firstLevelId={props.match.params.first} secondLevelId={props.match.params.second}/>}/>
                <Route exact path='/product/category/:first' render={(props) => <CategoryContainer firstLevelId={props.match.params.first}/>}/>
                <Route path='/product/product' render={() => <Product state={this.props.state}/>}/>
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