import React from 'react';
import {NavLink} from "react-router-dom";

const Account = (props) => {
    return (
        <div className="list-group">
            {!props.state.logged ?
                <>
                    <NavLink to={props.state.login} className="list-group-item">{props.state.text_login}</NavLink>
                    <NavLink to={props.state.register} className="list-group-item">{props.state.text_register}</NavLink>
                    <NavLink to={props.state.forgotten} className="list-group-item">{props.state.text_forgotten}</NavLink>
                </> : ''}
            <NavLink to={props.state.account} className="list-group-item">{props.state.text_account}</NavLink>
            {props.state.logged ?
                <>
                    <NavLink to={props.state.edit} className="list-group-item">{props.state.text_edit}</NavLink>
                    <NavLink to={props.state.password} className="list-group-item">{props.state.text_password}</NavLink>
                </> : ''}
            <NavLink to={props.state.address} className="list-group-item">{props.state.text_address}</NavLink>
            <NavLink to={props.state.wishlist} className="list-group-item">{props.state.text_wishlist}</NavLink>
            <NavLink to={props.state.order} className="list-group-item">{props.state.text_order}</NavLink>
            <NavLink to={props.state.download} className="list-group-item">{props.state.text_download}</NavLink>
            <NavLink to={props.state.recurring} className="list-group-item">{props.state.text_recurring}</NavLink>
            <NavLink to={props.state.reward} className="list-group-item">{props.state.text_reward}</NavLink>
            <NavLink to={props.state.return} className="list-group-item">{props.state.text_return}</NavLink>
            <NavLink to={props.state.transaction} className="list-group-item">{props.state.text_transaction}</NavLink>
            <NavLink to={props.state.newsletter} className="list-group-item">{props.state.text_newsletter}</NavLink>
            {props.state.logged ?
                <>
                    <NavLink to={props.state.logout} className="list-group-item">{props.state.text_logout}</NavLink>
                </>
                : ''}
        </div>
    )
};

export default Account;