import React from 'react';
import {connect} from "react-redux";
import ContentTop from "./ContentTop";

class ContentTopContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <ContentTop state={this.props.state} dispatch={this.props.dispatch}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {})(ContentTopContainer);