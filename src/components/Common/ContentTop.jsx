import React from 'react';
import Slideshow from "../Extension/Module/Slideshow";
import Featured from "../Extension/Module/Featured";
import Carousel from "../Extension/Module/Carousel";
import {Route} from "react-router-dom";
import Category from "../Product/Category";

const ContentTop = (props) => {
    return [
        <Route exact path='/' render={() => [
            <Slideshow state={props.state.slideshow}/>,
            <Featured state={props.state.featured}/>,
            <Carousel state={props.state.carousel}/>
        ]}/>,
        <Route exact path='/product/category/' render={() => ''}/>,
        //todo
    ]
};

export default ContentTop;