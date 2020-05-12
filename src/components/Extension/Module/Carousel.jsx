import React from 'react';

const Carousel = (props) => {
    return (
        <div className="swiper-viewport">
            <div id={'carousel' + props.state.module} className="swiper-container">
                <div className="swiper-wrapper">
                    {props.state.banners.map(banner => {
                        return (
                            <div key={banner.title} className="swiper-slide text-center">
                                {banner.link ?
                                    <a href={banner.link}><img src={banner.image} alt={banner.title} className="img-responsive"/></a> :
                                    <img src={banner.image} alt={banner.title} className="img-responsive"/>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={'swiper-pagination carousel' + props.state.module}></div>
            <div className="swiper-pager">
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    )
};

export default Carousel;