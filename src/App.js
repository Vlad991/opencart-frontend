import React from 'react';
import './App.css';
//import './stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css';
import './stylesheet/vendor/jquery/swiper/css/opencart.css';

import {Route} from "react-router-dom";
import Product from "./components/Product/Product";
import HeaderContainer from "./components/Common/HeaderContainer";
import FooterContainer from "./components/Common/FooterContainer";
import HomeContainer from "./components/Common/HomeContainer";
import InformationContainer from "./components/Information/InformationContainer";
import ContactContainer from "./components/Information/ContactContainer";
import CategoryContainer from "./components/Product/CategoryContainer";

const App = (props) => {
    return (
        <>
            <HeaderContainer/>
            <Route exact path='/' render={() => <HomeContainer state={props.state} dispatch={props.dispatch}/>}/>
            <Route exact path='/product/category/:first/:second' render={(props) => <CategoryContainer firstLevelId={props.match.params.first} secondLevelId={props.match.params.second}/>}/>
            <Route exact path='/product/category/:first' render={(props) => <CategoryContainer firstLevelId={props.match.params.first}/>}/>
            <Route path='/product/product' render={() => <Product state={props.state}/>}/>
            <Route path='/information/information/:id' render={(props) => <InformationContainer id={props.match.params.id}/>}/>
            <Route path='/information/contact' render={() => <ContactContainer state={props.state}/>}/>
            <FooterContainer/>
        </>
    )
};

export default App;