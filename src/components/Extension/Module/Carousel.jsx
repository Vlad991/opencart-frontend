import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const Carousel = (props) => {
    const swiperParams = {
        pagination: {
            el: '.slideshow' + props.state.module + '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        direction: 'horizontal',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        speed: 500,
        autoplay: {delay: 2500, stopOnLast: false, disableOnInteraction: false},
        loop: true
    }

    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    return (
        <div className="swiper-viewport">
            <Swiper id={'carousel' + props.state.module} className="swiper-container" {...swiperParams} getSwiper={setSwiper}>
                    {props.state.banners.map(banner => {
                        return (
                            <div key={banner.title} className="swiper-slide text-center">
                                {banner.link ?
                                    <NavLink to={banner.link}><img src={banner.image} alt={banner.title} className="img-responsive"/></NavLink>
                                    :
                                    <img src={banner.image} alt={banner.title} className="img-responsive"/>}
                            </div>
                        )
                    })}
            </Swiper>
            <div className="swiper-pager">
                <div className="swiper-button-next" onClick={goNext}></div>
                <div className="swiper-button-prev" onClick={goPrev}></div>
            </div>
        </div>
    )
};

export default Carousel;