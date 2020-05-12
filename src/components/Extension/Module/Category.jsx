import React from 'react';
import {NavLink} from "react-router-dom";

const Category = (props) => {
    return (
        <div className="list-group">
            {props.state.categories.map(category => {
                if (category.category_id === props.state.category_id) {
                    return [
                        <NavLink to={category.href} key={category.name} className="list-group-item active">{category.name.replace('amp;', '')}</NavLink>,
                        category.children ?
                            category.children.map(child => {
                                if (child.category_id === props.state.child_id) {
                                    return <NavLink to={child.href} key={child.name} className="list-group-item active">&nbsp;&nbsp;&nbsp;- {child.name}</NavLink>
                                } else {
                                    return <NavLink to={child.href} key={child.name} className="list-group-item">&nbsp;&nbsp;&nbsp;- {child.name}</NavLink>
                                }
                            }) : ''
                    ]
                } else {
                    return <NavLink to={category.href} key={category.name} className="list-group-item">{category.name.replace('amp;', '')}</NavLink>
                }
            })}
        </div>
    )
};

export default Category;