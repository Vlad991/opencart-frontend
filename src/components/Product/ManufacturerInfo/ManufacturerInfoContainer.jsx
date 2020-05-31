import React from 'react';
import {connect} from "react-redux";
import ManufacturerInfo from "./ManufacturerInfo";
import {setManufacturerInfoStateThunkCreator} from "../../../redux/product/manufacturer-info-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ManufacturerInfoContainer extends React.Component {
    componentDidMount() {
        this.props.setManufacturerInfoStateThunkCreator(this.props.match.params.id);
    };

    render() {
        return (
            <ManufacturerInfo state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.manufacturerInfoReducer
});

export default compose(
    connect(mapStateToProps, {setManufacturerInfoStateThunkCreator}),
    withRouter)(ManufacturerInfoContainer);