import React from 'react';
import './App.css';
import './javascript/bootstrap/css/bootstrap.min.css';
import './javascript/font-awesome/css/font-awesome.min.css';
import './stylesheet/fonts.css';
import './stylesheet/stylesheet.css';
import 'jquery/dist/jquery.js';
// import 'bootstrap/dist/js/bootstrap.min.js';


import Header from "./components/Common/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Common/Footer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header state={props.state.common}/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={ () => <Dialogs state={props.state.dialogsPage} /> }/>

                <Route path='/profile'
                       render={ () => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost} /> }/>
            </div>
            <Footer state={props.state.common}/>
        </div>
    )
};

export default App;