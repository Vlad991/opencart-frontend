import React from 'react';

const Language = (props) => {
    if (props.state.languages.length > 1) {
        return (
            <div className="pull-left">
                <form action={props.state.action} method="post" encType="multipart/form-data" id="form-language">
                    <div className="btn-group">
                        <button className="btn btn-link dropdown-toggle" data-toggle="dropdown">
                            {props.state.languages.map(language => {
                                if (language.code === props.state.code) {
                                    return (
                                        <img key={language.code} src={'catalog/language/' + language.code + '/' + language.code + '.png'} alt={language.name} title={language.name}/>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                            <span className="hidden-xs hidden-sm hidden-md">{props.state.text_language}</span>&nbsp;<i className="fa fa-caret-down"></i></button>
                        <ul className="dropdown-menu">
                            {props.state.languages.map(language => {
                                return (
                                    <li key={language.code}>
                                        <button className="btn btn-link btn-block language-select" type="button" name={language.code}>
                                            <img src={'catalog/language/' + language.code + '/' + language.code + '.png'} alt={language.name} title={language.name}/> {language.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <input type="hidden" name="code" value=""/>
                    <input type="hidden" name="redirect" value={ props.state.redirect }/>
                </form>
            </div>
        )
    } else {
        return null;
    }
};

export default Language;