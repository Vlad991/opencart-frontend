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
        <Header state={props.state.commonReducer}/>,
        <Route exact path='/' render={() => <Home state={props.state}/>}/>,
        <Route path='/product/category' render={() => <Category state={props.state}/>}/>,
        // <Navbar/>,
        // <div className='app-wrapper-content'>
        //     <Route path='/dialogs' render={() => <Dialogs store={props.store.dialogsPage}/>}/>
        //     <Route path='/profile' render={() => <Profile store={props.store.profilePage} addPost={props.addPost}/>}/>
        // </div>,
        <Footer state={props.state.commonReducer.footerReducer}/>
    ]
};

export default App;