let initialState = {
    heading_title: 'Featured',
    text_tax: 'Ex Tax:',
    button_cart: 'Add to Cart',
    products: [
        {
            name: 'MacBook',
            description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
            href: '/product/product',
            thumb: '/image/catalog/demo/macbook_1.jpg',
            price: '£368.73',
            special: '£300',
            tax: '£306.25',
            rating: 4
        },
        {
            name: 'MacBook1',
            description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
            href: '/product/product',
            thumb: '/image/catalog/demo/macbook_1.jpg',
            price: '£368.73',
            special: '£300',
            tax: '£306.25',
            rating: 2
        },
        {
            name: 'MacBook2',
            description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
            href: '/product/product',
            thumb: '/image/catalog/demo/macbook_1.jpg',
            price: '£368.73',
            special: '£300',
            tax: '£306.25',
            rating: 4
        },
        {
            name: 'MacBook3',
            description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
            href: '/product/product',
            thumb: '/image/catalog/demo/macbook_1.jpg',
            price: '£368.73',
            special: '£300',
            tax: '£306.25',
            rating: 4
        },
    ]
};

const featuredReducer = (state = initialState, action) => {
    return state;
};

export default featuredReducer;