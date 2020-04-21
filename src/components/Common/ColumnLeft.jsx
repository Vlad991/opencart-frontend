import React from 'react';
import Category from "../Extension/Module/Category";

const ColumnLeft = (props) => {
    return props.state.modules.map(module => {
        switch (module.module_name) {
            case 'category':
                return (
                    <aside key={module.module_name} id="column-left" className="col-sm-3 hidden-xs">
                        <Category state={module}/>
                    </aside>
                );
            default:
                return null;
        }
    });
};

export default ColumnLeft;