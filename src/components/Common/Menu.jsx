import React from 'react';

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
                                if (category.children) {
                                    return (
                                        <li className="dropdown">
                                            <a href={category.href} className="dropdown-toggle" data-toggle="dropdown">{category.name}</a>
                                            <div className="dropdown-menu">
                                                <div className="dropdown-inner">
                                                    <CategoryChildren category={category}/>
                                                </div>
                                                <a href={category.href} className="see-all">{props.state.text_all} {category.name}</a></div>
                                        </li>
                                    )
                                } else {
                                    return <li><a href={category.href}>{category.name}</a></li>
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
        childrenGroups.map(children => {
            return (
                <ul className="list-unstyled">
                    {children.map(child => {
                        return <li><a href={child.href}>{child.name}</a></li>
                    })}
                </ul>
            )
        })
    )
};

export default Menu;