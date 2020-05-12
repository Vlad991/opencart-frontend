import React from 'react';
import Category from "../Extension/Module/Category";
import Slideshow from "../Extension/Module/Slideshow";
import Banner from "../Extension/Module/Banner";

const ColumnLeft = (props) => {
    return (
        <aside id="column-left" className="col-sm-3 hidden-xs">
            {props.state.modules.map(module => {
                switch (module.module_name) {
                    case 'category':
                        return (
                            <Category state={module}/>
                        );
                    case 'slideshow':
                        return (
                            <Slideshow state={module}/>
                        );
                    case 'banner':
                        return (
                            <Banner state={module}/>
                        );
                    default:
                        return null;
                }
            })}
        </aside>
    )
};

export default ColumnLeft;