import React from 'react';
import './App.css';
import './stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css'
import './stylesheet/vendor/jquery/swiper/css/opencart.css'

import {BrowserRouter, Route} from "react-router-dom";
import Category from "./components/Product/Category";
import Product from "./components/Product/Product";
import Contact from "./components/Information/Contact";
import HeaderContainer from "./components/Common/HeaderContainer";
import FooterContainer from "./components/Common/FooterContainer";
import HomeContainer from "./components/Common/HomeContainer";
import InformationContainer from "./components/Information/InformationContainer";

const App = (props) => {
    return [
        <HeaderContainer/>,
        <Route exact path='/' render={() => <HomeContainer state={props.state} dispatch={props.dispatch}/>}/>,
        <Route path='/product/category' render={() => <Category state={props.state}/>}/>,
        <Route path='/product/product' render={() => <Product state={props.state}/>}/>,
        <Route path='/information/information/:id' render={(props) => <InformationContainer id={props.match.params.id}/>}/>,
        <Route path='/information/contact' render={() => <Contact state={props.state}/>}/>,
        <FooterContainer/>
    ]
};

export default App;