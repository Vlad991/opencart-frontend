import React from 'react';
import {connect} from "react-redux";
import {commonAPI} from "../../api/api";
import {setStateActionCreator} from "../../redux/common/footer-reducer";
import Footer from "./Footer";

class FooterContainer extends React.Component {
    componentDidMount() {
        commonAPI.getFooter().then(data => {
            this.props.setStateActionCreator(data);
        });
    }

    render() {
        return (
            <Footer state={this.props.state.commonReducer.footerReducer}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {setStateActionCreator})(FooterContainer);