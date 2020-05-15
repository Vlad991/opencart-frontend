import React from 'react';
import {connect} from "react-redux";
import Footer from "./Footer";
import {setFooterStateThunkCreator} from "../../../redux/common/footer-reducer";

class FooterContainer extends React.Component {
    componentDidMount() {
        this.props.setFooterStateThunkCreator();
    }

    render() {
        return (
            <Footer state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.footerReducer
});

export default connect(mapStateToProps, {setFooterStateThunkCreator})(FooterContainer);