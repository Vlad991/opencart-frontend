import React from 'react';
import {connect} from "react-redux";
import Sitemap from "./Sitemap";
import {setSitemapStateThunkCreator} from "../../../redux/information/sitemap-reducer";

class SitemapContainer extends React.Component {
    componentDidMount() {
        this.props.setSitemapStateThunkCreator();
    }

    render() {
        return (
            <Sitemap state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.informationReducer.sitemapReducer
});

export default connect(mapStateToProps, {setSitemapStateThunkCreator})(SitemapContainer);