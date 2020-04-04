import React from 'react';

const Search = (props) => {
    return (
        <div id="search" className="input-group">
            <input type="text" name="search" value={props.state.search} placeholder={props.state.text_search} className="form-control input-lg"/>
            <span className="input-group-btn">
                <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search"></i></button>
            </span>
        </div>
    );
};

export default Search;