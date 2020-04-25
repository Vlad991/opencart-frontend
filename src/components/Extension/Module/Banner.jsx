import React from 'react';

const Banner = (props) => {
    return (
        <div className="swiper-viewport">
            <div id={'banner' + props.state.module} className="swiper-container">
                <div className="swiper-wrapper">
                    {props.state.banners.map(banner => {
                        return (
                            <div className="swiper-slide">
                                {banner.link ?
                                    <a href={banner.link}>
                                        <img src={banner.image} alt={banner.title} className="img-responsive"/>
                                    </a>
                                    : <img src={banner.image} alt={banner.title} className="img-responsive"/>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Banner;