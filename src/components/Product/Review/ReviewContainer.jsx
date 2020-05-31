import React from 'react';
import {connect} from "react-redux";
import {setReviewStateThunkCreator} from "../../../redux/product/review-reducer";
import Review from "./Review";

class ReviewContainer extends React.Component {
    componentDidMount() {
        this.props.setReviewStateThunkCreator(this.props.productId);
    };

    render() {
        return (
            <Review state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.productReducer.reviewReducer
});

export default connect(mapStateToProps, {setReviewStateThunkCreator})(ReviewContainer);