import React from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const Banner = (props) => {
    const swiperParams = {
        direction: 'horizontal',
        effect: 'fade',
        speed: 500,
        autoplay: {delay: 2500, stopOnLast: false, disableOnInteraction: false},
        loop: true
    }

    return (
        <div className="swiper-viewport">
            <Swiper id={'banner' + props.state.module} className="swiper-container" {...swiperParams}>
                {props.state.banners.map(banner => {
                    return (
                        <div className="swiper-slide">
                            {banner.link ?
                                <NavLink to={banner.link}>
                                    <img src={banner.image} alt={banner.title} className="img-responsive"/>
                                </NavLink>
                                : <img src={banner.image} alt={banner.title} className="img-responsive"/>}
                        </div>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Banner;