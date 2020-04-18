import React from 'react';
import {connect} from "react-redux";
import Featured from "./Featured";

class FeaturedContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        debugger;
        return (
            <Featured state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, {})(FeaturedContainer);