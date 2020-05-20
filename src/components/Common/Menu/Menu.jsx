import React from 'react';
import {NavLink} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

const Menu = (props) => {
    if (props.state.categories) {
        return (
            <div className="container">
                <nav id="menu" className="navbar">
                    <div className="navbar-header"><span id="category" className="visible-xs">{props.state.text_category}</span>
                        <button type="button" className="btn btn-navbar navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i className="fa fa-bars"></i></button>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            {props.state.categories.map(category => {
                                if (category.children && category.children.length > 0) {
                                    return (
                                        <li key={category.name} className="dropdown">
                                            <NavLink to={category.href} className="dropdown-toggle" data-toggle="dropdown">{ReactHtmlParser(category.name)}</NavLink>
                                            <div className="dropdown-menu">
                                                <div className="dropdown-inner">
                                                    <CategoryChildren category={category}/>
                                                </div>
                                                <NavLink to={category.href} className="see-all">{ReactHtmlParser(props.state.text_all)} {ReactHtmlParser(category.name)}</NavLink></div>
                                        </li>
                                    )
                                } else {
                                    return <li key={category.name}><NavLink to={category.href}>{category.name}</NavLink></li>
                                }
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    } else {
        return null;
    }
};

const CategoryChildren = (props) => {
    let category = props.category;
    let childrenGroups = [];
    let columnCount = category.column;
    let size = Math.ceil(category.children.length / columnCount);
    for (let i = 0; i < columnCount; i++) {
        childrenGroups[i] = category.children.slice((i * size), (i * size) + size);
    }
    return (
        childrenGroups.map((children, index) => {
            return (
                <ul key={index} className="list-unstyled">
                    {children.map(child => {
                        return <li key={child.name}><NavLink to={child.href}>{child.name}</NavLink></li>
                    })}
                </ul>
            )
        })
    )
};

export default Menu;