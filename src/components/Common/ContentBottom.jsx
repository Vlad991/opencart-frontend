import React from 'react';
import Carousel from "../Extension/Module/Carousel";
import Category from "../Extension/Module/Category";
import Featured from "../Extension/Module/Featured";
import Slideshow from "../Extension/Module/Slideshow";

const ContentBottom = (props) => {
    return props.state.modules.map(module => {
        switch (module.module_name) {
            case 'carousel':
                return <Carousel key={module.module_name} state={module}/>;
            case 'category':
                return <Category key={module.module_name}/>;
            case 'featured':
                return <Featured key={module.module_name} state={module} dispatch={props.dispatch}/>;
            case 'slideshow':
                return <Slideshow key={module.module_name} state={module}/>;
            default:
                return null;
        }
    });
};

export default ContentBottom;