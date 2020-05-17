import React from 'react';
import {connect} from "react-redux";
import WishList from "./WishList";
import {setWishListStateThunkCreator} from "../../redux/account/wishlist-reducer";

class WishListContainer extends React.Component {
    componentDidMount() {
        this.props.setWishListStateThunkCreator();
    };

    render() {
        return (
            <WishList state={this.props.state} />
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.accountReducer.wishListReducer
});

export default connect(mapStateToProps, {setWishListStateThunkCreator})(WishListContainer);