import React from 'react';
import Slideshow from "../Extension/Module/Slideshow";
import Carousel from "../Extension/Module/Carousel";
import Featured from "../Extension/Module/Featured/Featured";
import Category from "../Extension/Module/Category";
import FeaturedContainer from "../Extension/Module/Featured/FeaturedContainer";

const ContentTop = (props) => {
    return props.state.modules.map(module => {
        switch (module.module_name) {
            case 'carousel':
                return <Carousel key={module.module_name} state={module}/>;
            case 'category':
                return <Category key={module.module_name}/>;
            case 'featured':
                return <FeaturedContainer key={module.module_name} state={module}/>;
            case 'slideshow':
                return <Slideshow key={module.module_name} state={module}/>;
            default:
                return null;
        }
    });
};

export default ContentTop;