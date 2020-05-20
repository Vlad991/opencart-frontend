import React from 'react';
import ColumnLeft from "../ColumnLeft";
import ContentTop from "../ContentTop";
import ContentBottom from "../ContentBottom";
import ColumnRight from "../ColumnRight";
import {Alert} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

const Home = (props) => {
    let stateHome = props.state;
    let classVal;
    if ((stateHome.column_left && stateHome.column_left.modules.length > 0) && (stateHome.column_right && stateHome.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((stateHome.column_left && stateHome.column_left.modules.length > 0) || (stateHome.column_right && stateHome.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="common-home" className="container">
            {stateHome.successMessage ?
                <Alert variant={"success"} className="alert-dismissable in">
                    <i className="fa fa-check-circle"></i> {ReactHtmlParser(stateHome.successMessage)} <button type="button" className="close" data-dismiss="alert">&times;</button>
                </Alert> : ''}
            <div className="row">
                {stateHome.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateHome.content_top ? <ContentTop state={props.state.content_top} dispatch={props.dispatch}/> : ''}
                    {stateHome.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {stateHome.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Home;