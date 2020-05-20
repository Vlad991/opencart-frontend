import React from 'react';
import {connect} from "react-redux";
import Featured from "./Featured";
import {cartAddThunkCreator} from "../../../../redux/opencart-reducer";

class FeaturedContainer extends React.Component {
    componentDidMount() {
    };

    cartAdd = (product_id) => {
        this.props.cartAddThunkCreator(product_id);
    };

    render() {
        return (
            <Featured state={this.props.state} cartAdd={this.cartAdd}/>
        );
    };
}


let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {cartAddThunkCreator})(FeaturedContainer);