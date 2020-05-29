import React from 'react';
import {connect} from "react-redux";
import Compare from "./Compare";
import {setCompareStateThunkCreator} from "../../../redux/product/compare-reducer";

class CompareContainer extends React.Component {
    componentDidMount() {
        this.props.setCompareStateThunkCreator();
    };

    render() {
        return (
            <Compare state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.compareReducer
});

export default connect(mapStateToProps, {setCompareStateThunkCreator})(CompareContainer);