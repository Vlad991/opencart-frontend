import React from 'react';
import ColumnLeft from "./ColumnLeft";
import ContentTop from "./ContentTop";
import ContentBottom from "./ContentBottom";
import ColumnRight from "./ColumnRight";

const Home = (props) => {
    let stateHome = props.state.common.home;
    let classVal;
    if (stateHome.column_left && stateHome.column_right) {
        classVal = 'col-sm-6';
    } else if (stateHome.column_left || stateHome.column_right) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="common-home" className="container">
            <div className="row">
                {stateHome.column_left ? <ColumnLeft state={props.state.extension.module}/> : ''}
                <div id="content" className={classVal}>
                    {stateHome.content_top ? <ContentTop state={props.state.extension.module}/> : ''}
                    {stateHome.content_bottom ? <ContentBottom state={props.state.extension.module}/> : ''}
                </div>
                {stateHome.column_right ? <ColumnRight state={props.state.extension.module}/> : ''}
            </div>
        </div>
    )
};

export default Home;