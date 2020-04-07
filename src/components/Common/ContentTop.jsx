import React from 'react';
import Slideshow from "../Extension/Module/Slideshow";
import Featured from "../Extension/Module/Featured";
import Carousel from "../Extension/Module/Carousel";
import {Route} from "react-router-dom";

const ContentTop = (props) => {
    return [
        <Route exact path='/' render={() => [
            <Slideshow state={props.state.slideshowReducer}/>,
            <Featured state={props.state.featuredReducer}/>,
            <Carousel state={props.state.carouselReducer}/>
        ]}/>,
        <Route exact path='/product/category/' render={() => ''}/>,
        //todo
    ]
};

export default ContentTop;