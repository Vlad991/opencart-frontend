import React from 'react';
import Slideshow from "../Extension/Module/Slideshow";
import Featured from "../Extension/Module/Featured";
import Carousel from "../Extension/Module/Carousel";
import {Route} from "react-router-dom";

const ContentTop = (props) => {
    return [
        <Route key={'/'} exact path='/' render={() => [
            <Slideshow state={props.state.slideshowReducer}/>,
            <Featured state={props.state.featuredReducer}/>,
            <Carousel state={props.state.carouselReducer}/>
        ]}/>,
        <Route key={'/product/category'} exact path='/product/category/' render={() => ''}/>,
    ]
};

export default ContentTop;