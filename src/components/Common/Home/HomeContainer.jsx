import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import {setHomeStateThunkCreator} from "../../../redux/common/home-reducer";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.setHomeStateThunkCreator();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.globalCurrency !== this.props.globalCurrency) || (prevProps.globalCartProducts !== this.props.globalCartProducts)) {
            this.props.setHomeStateThunkCreator();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    render() {
        return (
            <Home state={this.props.state}/>
        );
    };
}


let mapStateToProps = (state) => ({
    state: state.commonReducer.homeReducer,
    globalCurrency: state.opencartReducer.globalCurrency,
    globalCartProducts: state.opencartReducer.globalCartProducts,
});

export default connect(mapStateToProps, {setHomeStateThunkCreator})(HomeContainer);