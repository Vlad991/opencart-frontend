import React from 'react';
import ColumnLeft from "./ColumnLeft";
import ContentTop from "./ContentTop";
import ContentBottom from "./ContentBottom";
import ColumnRight from "./ColumnRight";

const Home = (props) => {
    let classVal;
    if (props.state.common.column_left && props.state.common.column_right) {
        classVal = 'col-sm-6';
    } else if (props.state.common.column_left || props.state.common.column_right) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="common-home" className="container">
            <div className="row">
                <ColumnLeft state={props.state.common.column_left}/>
                <div id="content" className={ classVal }>
                    <ContentTop state={props.state.extension.module}/>
                    <ContentBottom state={props.state.common.content_bottom}/>
                </div>
                <ColumnRight state={props.state.common.column_right}/>
            </div>
        </div>
    )
};

export default Home;