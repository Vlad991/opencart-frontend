import React from 'react';
import {NavLink} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

const Menu = (props) => {

    const menuRef = React.createRef();

    if (props.state.categories) {
        return (
            <div className="container">
                <nav id="menu" className="navbar" ref={menuRef}>
                    <div className="navbar-header"><span id="category" className="visible-xs">{props.state.text_category}</span>
                        <button type="button" className="btn btn-navbar navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><i className="fa fa-bars"></i></button>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            {props.state.categories.map((category, index) => {
                                if (category.children && category.children.length > 0) {
                                    return (
                                        <MenuDropdownItem state={props.state} category={category} menuRef={menuRef}/>
                                    );
                                } else {
                                    return <li key={category.name}><NavLink to={category.href}>{ReactHtmlParser(category.name)}</NavLink></li>
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

const MenuDropdownItem = (props) => {
    const dropdownRef = React.createRef();
    const dropdownMenuRef = React.createRef();
    const getPosition = () => {
        let i = (dropdownRef.current.offsetLeft + dropdownMenuRef.current.offsetWidth) - (props.menuRef.current.offsetLeft + props.menuRef.current.offsetWidth);
        if (i > 0) {
            dropdownMenuRef.current.style.marginLeft = '-' + (i + 10) + 'px';
        }
    };
    return (
        <li key={props.category.name} className="dropdown" ref={dropdownRef} onMouseOver={getPosition}>
            <NavLink to={props.category.href} className="dropdown-toggle" data-toggle="dropdown">{ReactHtmlParser(props.category.name)}</NavLink>
            <div className="dropdown-menu" ref={dropdownMenuRef}>
                <div className="dropdown-inner">
                    <CategoryChildren category={props.category}/>
                </div>
                <NavLink to={props.category.href} className="see-all">{ReactHtmlParser(props.state.text_all)} {ReactHtmlParser(props.category.name)}</NavLink>
            </div>
        </li>
    );
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