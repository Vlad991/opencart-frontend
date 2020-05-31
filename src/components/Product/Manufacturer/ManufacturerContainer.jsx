import React from 'react';
import {connect} from "react-redux";
import ManufacturerList from "./ManufacturerList";
import {setManufacturerStateThunkCreator} from "../../../redux/product/manufacturer-reducer";

class ManufacturerContainer extends React.Component {
    componentDidMount() {
        this.props.setManufacturerStateThunkCreator();
    };

    render() {
        return (
            <ManufacturerList state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.manufacturerReducer
});

export default connect(mapStateToProps, {setManufacturerStateThunkCreator})(ManufacturerContainer);