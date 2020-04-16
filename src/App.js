import React from 'react';
import './App.css';
import './stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css'
import './stylesheet/vendor/jquery/swiper/css/opencart.css'

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Common/Home";
import Category from "./components/Product/Category";
import Product from "./components/Product/Product";
import Information from "./components/Information/Information";
import Contact from "./components/Information/Contact";
import HeaderContainer from "./components/Common/HeaderContainer";
import FooterContainer from "./components/Common/FooterContainer";

const App = (props) => {
    return [
        <HeaderContainer state={props.state.commonReducer} dispatch={props.dispatch}/>,
        <Route exact path='/' render={() => <Home state={props.state}/>}/>,
        <Route path='/product/category' render={() => <Category state={props.state}/>}/>,
        <Route path='/product/product' render={() => <Product state={props.state}/>}/>,
        <Route path='/information/information' render={() => <Information state={props.state}/>}/>,
        <Route path='/information/contact' render={() => <Contact state={props.state}/>}/>,
        <FooterContainer state={props.state.commonReducer.footerReducer} dispatch={props.dispatch}/>
    ]
};

export default App;