import React from 'react';
import Slideshow from "../Extension/Module/Slideshow";
import Featured from "../Extension/Module/Featured";
import Carousel from "../Extension/Module/Carousel";

const ContentTop = (props) => {
    return [
        <Slideshow state={props.state.slideshow}/>,
        <Featured state={props.state.featured}/>,
        <Carousel state={props.state.carousel}/>
        //todo
    ]
};

export default ContentTop;