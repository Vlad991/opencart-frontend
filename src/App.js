import React from 'react';
import './App.css';
import './stylesheet/vendor/bootstrap/css/bootstrap.min.css';
import './stylesheet/vendor/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import './stylesheet/vendor/jquery/swiper/css/swiper.min.css'
import './stylesheet/vendor/jquery/swiper/css/opencart.css'

import Header from "./components/Common/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Common/Footer";
import Home from "./components/Common/Home";

const App = (props) => {
    return [
        <Header state={props.state.common}/>,
        <Home state={props.state}/>,
        <Navbar/>,
        <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
        </div>,
        <Footer state={props.state.common}/>
    ]
};

export default App;