import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => ({
    stateHeader: state.headerReducer
});

let mapDispatchToProps = (dispatch) => ({

});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;