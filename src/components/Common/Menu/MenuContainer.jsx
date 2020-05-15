import React from 'react';
import {connect} from "react-redux";
import Menu from "./Menu";
import {setMenuStateThunkCreator} from "../../../redux/common/menu-reducer";

class MenuContainer extends React.Component {
    componentDidMount() {
        this.props.setMenuStateThunkCreator();
    }

    render() {
        return (
            <Menu state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.menuReducer
});

export default connect(mapStateToProps, {setMenuStateThunkCreator})(MenuContainer);