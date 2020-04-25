import React, {useState} from 'react';
import Swiper from 'react-id-swiper';

const Slideshow = (props) => {
    const swiperParams = {
        // pagination: {
        //     el: '.slideshow' + props.state.module,
        //     type: 'bullets',
        //     clickable: true
        // },
        direction: 'horizontal',
        slidesPerView: 1,
        pagination: '.slideshow' + props.state.module,
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
        <>
            <div className="swiper-viewport">
                <Swiper id={'slideshow' + props.state.module} {...swiperParams} getSwiper={setSwiper}>
                    {props.state.banners.map(banner => {
                        return (
                            <div key={banner.title} className="swiper-slide text-center">
                                {banner.link ?
                                    <a href={banner.link}><img src={banner.image} alt={banner.title} className="img-responsive"/></a>
                                    :
                                    <img src={banner.image} alt={banner.title} className="img-responsive"/>}
                            </div>
                        )
                    })}
                </Swiper>
                <div className={'swiper-pagination slideshow' + props.state.module}></div>
                <div className="swiper-pager">
                    <div className="swiper-button-next" onClick={goNext}></div>
                    <div className="swiper-button-prev" onClick={goPrev}></div>
                </div>
            </div>
        </>
    );
};

export default Slideshow;