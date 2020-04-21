import React from 'react';
import {connect} from "react-redux";
import Menu from "./Menu";
import {commonAPI} from "../../api/api";
import {setStateActionCreator} from "../../redux/common/menu-reducer";

class MenuContainer extends React.Component {
    componentDidMount() {
        commonAPI.getMenu().then(data => {
            this.props.setStateActionCreator(data);
        });
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

export default connect(mapStateToProps, {setStateActionCreator})(MenuContainer);