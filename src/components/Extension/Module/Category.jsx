import React from 'react';

const Category = (props) => {
    return (
        <div className="list-group">
            {props.state.categories.map(category => {
                if (category.category_id === props.state.category_id) {
                    return [
                        <a href={category.href} className="list-group-item active">{category.name}</a>,
                        category.children ?
                            category.children.map(child => {
                                if (child.category_id === props.state.child_id) {
                                    return <a href={child.href} className="list-group-item active">&nbsp;&nbsp;&nbsp;- {child.name}</a>
                                } else {
                                    return <a href={child.href} className="list-group-item">&nbsp;&nbsp;&nbsp;- {child.name}</a>
                                }
                            }) : ''
                    ]
                } else {
                    return <a href={category.href} className="list-group-item">{category.name}</a>
                }
            })}
        </div>
    )
};

export default Category;