import React from 'react';
import Slideshow from "../Extension/Module/Slideshow";
import Carousel from "../Extension/Module/Carousel";
import Featured from "../Extension/Module/Featured";
import Category from "../Extension/Module/Category";

const ContentTop = (props) => {
    return props.state.modules.map(module => {
        switch (module.module_name) {
            case 'carousel':
                return <Carousel state={module}/>;
            case 'category':
                return <Category/>;
            case 'featured':
                return <Featured state={module} dispatch={props.dispatch}/>;
            case 'slideshow':
                return <Slideshow state={module}/>;
            default:
                return null;
        }
    });
};

export default ContentTop;