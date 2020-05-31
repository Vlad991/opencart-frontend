import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import ColumnRight from "../../Common/ColumnRight";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const ManufacturerList = (props) => {
    let stateManufacturerList = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }

    return (
        <div id="product-manufacturer" className="container">
            <ul className="breadcrumb">
                {stateManufacturerList.breadcrumbs.map(breadcrumb => <li key={breadcrumb.text}><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {props.state.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {props.state.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h1>{ReactHtmlParser(stateManufacturerList.heading_title)}</h1>
                    {stateManufacturerList.categories ? <>
                        <p>
                            <strong>{stateManufacturerList.text_index}</strong>
                            {Object.values(stateManufacturerList.categories).map(category => <>&nbsp;&nbsp;&nbsp;<a href={"#" + category.name}>{category.name}</a></>)}
                        </p>
                        {Object.values(stateManufacturerList.categories).map(category => {
                            return (<>
                                <h2 id={category.name}>{category.name}</h2>
                                {category.manufacturer && category.manufacturer.length > 0 ? <Manufacturers manufacturer={category.manufacturer}/> : ''}
                            </>)
                        })}
                    </> : <>
                        <p>{stateManufacturerList.text_empty}</p>
                        <div className="buttons clearfix">
                            <div className="pull-right"><NavLink to={stateManufacturerList.continue} className="btn btn-primary">{stateManufacturerList.button_continue}</NavLink></div>
                        </div>
                    </>}
                    {props.state.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {props.state.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

const Manufacturers = (props) => {
    let manufacturerGroups = [];
    let manufacturer = [...props.manufacturer];
    while (manufacturer.length > 0) {
        manufacturerGroups.push(manufacturer.splice(0, 4));
    }

    return manufacturerGroups.map(manufacturers => {
        return (
            <div className="row">
                {manufacturers.map(manufacturer => <div className="col-sm-3"><NavLink to={manufacturer.href}>{manufacturer.name}</NavLink></div>)}
            </div>
        )
    });
}

export default ManufacturerList;