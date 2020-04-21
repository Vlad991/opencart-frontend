import React from 'react';
import {Route} from "react-router-dom";
import Category from "../Extension/Module/Category";
import Carousel from "../Extension/Module/Carousel";
import Featured from "../Extension/Module/Featured";
import Slideshow from "../Extension/Module/Slideshow";

const ColumnLeft = (props) => {
    return props.state.modules.map(module => {
        switch (module.module_name) {
            case 'category':
                return (
                    <aside id="column-left" className="col-sm-3 hidden-xs">
                        <Category state={module}/>
                    </aside>
                );
            default:
                return null;
        }
    });
};

export default ColumnLeft;