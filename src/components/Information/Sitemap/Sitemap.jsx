import React from 'react';
import ColumnLeft from "../../Common/ColumnLeft";
import ColumnRight from "../../Common/ColumnRight";
import ContentTop from "../../Common/ContentTop";
import ContentBottom from "../../Common/ContentBottom";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Sitemap = (props) => {
    let stateSitemap = props.state;
    let classVal;
    if ((props.state.column_left && props.state.column_left.modules.length > 0) && (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-6';
    } else if ((props.state.column_left && props.state.column_left.modules.length > 0) || (props.state.column_right && props.state.column_right.modules.length > 0)) {
        classVal = 'col-sm-9';
    } else {
        classVal = 'col-sm-12';
    }
    return (
        <div id="information-sitemap" className="container">
            <ul className="breadcrumb">
                {stateSitemap.breadcrumbs.map(breadcrumb => <li><NavLink to={breadcrumb.href}>{ReactHtmlParser(breadcrumb.text)}</NavLink></li>)}
            </ul>
            <div className="row">
                {stateSitemap.column_left ? <ColumnLeft state={props.state.column_left}/> : ''}
                <div id="content" className={classVal}>
                    {stateSitemap.content_top ? <ContentTop state={props.state.content_top}/> : ''}
                    <h1>{stateSitemap.heading_title}</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <ul>
                                {stateSitemap.categories.map(category_1 => {
                                    return (
                                        <li>
                                            <NavLink to={category_1.href}>{ReactHtmlParser(category_1.name)}</NavLink>
                                            {category_1.children ?
                                                <ul>
                                                    {category_1.children.map(category_2 => {
                                                        return (
                                                            <li>
                                                                <NavLink to={category_2.href}>{ReactHtmlParser(category_2.name)}</NavLink>
                                                                {category_2.children ?
                                                                    <ul>
                                                                        {category_2.children.map(category_3 => <li><NavLink to={category_3.href}>{ReactHtmlParser(category_3.name)}</NavLink></li>)}
                                                                    </ul> : ''}
                                                            </li>
                                                        )
                                                    })}
                                                </ul> : ''}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul>
                                <li><NavLink to={stateSitemap.special}>{stateSitemap.text_special}</NavLink></li>
                                <li><NavLink to={stateSitemap.account}>{stateSitemap.text_account}</NavLink>
                                    <ul>
                                        <li><NavLink to={stateSitemap.edit}>{stateSitemap.text_edit}</NavLink></li>
                                        <li><NavLink to={stateSitemap.password}>{stateSitemap.text_password}</NavLink></li>
                                        <li><NavLink to={stateSitemap.address}>{stateSitemap.text_address}</NavLink></li>
                                        <li><NavLink to={stateSitemap.history}>{stateSitemap.text_history}</NavLink></li>
                                        <li><NavLink to={stateSitemap.download}>{stateSitemap.text_download}</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to={stateSitemap.history}>{stateSitemap.text_cart}</NavLink></li>
                                <li><NavLink to={stateSitemap.checkout}>{stateSitemap.text_checkout}</NavLink></li>
                                <li><NavLink to={stateSitemap.search}>{stateSitemap.text_search}</NavLink></li>
                                <li>
                                    {stateSitemap.text_information}
                                    <ul>
                                        {stateSitemap.informations.map(information => <li><NavLink to={information.href}>{ReactHtmlParser(information.title)}</NavLink></li>)}
                                        <li><NavLink to={stateSitemap.contact}>{stateSitemap.text_contact}</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {stateSitemap.content_bottom ? <ContentBottom state={props.state.content_bottom}/> : ''}
                </div>
                {stateSitemap.column_right ? <ColumnRight state={props.state.column_right}/> : ''}
            </div>
        </div>
    )
};

export default Sitemap;