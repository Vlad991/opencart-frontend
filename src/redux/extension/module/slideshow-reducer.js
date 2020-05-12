let initialState = {
    module: 0,
    banners: [
        {
            link: '#',
            image: '/image/catalog/demo/banners/iPhone6.jpg',
            title: 'iPhone'
        },
        {
            link: '#',
            image: '/image/catalog/demo/banners/MacBookAir.jpg',
            title: 'MacBook'
        }
    ]
};

const slideshowReducer = (state = initialState, action) => {
    return state;
};

export default slideshowReducer;