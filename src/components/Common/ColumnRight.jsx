import React from 'react';
import Account from "../Extension/Module/Account";

const ColumnRight = (props) => {
    return (
        <aside id="column-right" className="col-sm-3 hidden-xs">
            {props.state.modules.map(module => {
                switch (module.module_name) {
                    case 'account':
                        return (
                            <Account state={module}/>
                        );
                        return null;
                }
            })}
        </aside>
    );
};

export default ColumnRight;