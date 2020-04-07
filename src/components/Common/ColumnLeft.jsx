import React from 'react';
import {Route} from "react-router-dom";
import Category from "../Extension/Module/Category";

const ColumnLeft = (props) => {
    return [
        <Route path='/product/category' render={() => (
            <aside id="column-left" className="col-sm-3 hidden-xs">
                <Category state={props.state.categoryReducer}/>
            </aside>
        )}/>,
    ]
    // todo
};

export default ColumnLeft;