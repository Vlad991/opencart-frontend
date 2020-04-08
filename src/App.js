import React from 'react';
import './App.css';
import './stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css'
import './stylesheet/vendor/jquery/swiper/css/opencart.css'

import Header from "./components/Common/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Common/Footer";
import Home from "./components/Common/Home";
import Category from "./components/Product/Category";

const App = (props) => {
    return [
        <Header state={props.state.commonReducer} dispatch={props.dispatch}/>,
        <Route exact path='/' render={() => <Home state={props.state}/>}/>,
        <Route path='/product/category' render={() => <Category state={props.state}/>}/>,
        <Footer state={props.state.commonReducer.footerReducer}/>
    ]
};

export default App;