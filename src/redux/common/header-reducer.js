let initialState = {
    contact: 'http://localhost:3000/index.php?route=information/contact',
    telephone: '123456789',
    account: 'http://localhost:3000/index.php?route=account/account',
    text_account: 'My Account',
    wishlist: 'http://localhost:3000/index.php?route=account/wishlist',
    text_wishlist: 'Wish List (0)',
    shopping_cart: 'http://localhost:3000/index.php?route=checkout/cart',
    text_shopping_cart: 'Shopping Cart',
    checkout: 'http://localhost:3000/index.php?route=checkout/checkout',
    text_checkout: 'Checkout',
    logged: false,
    register: 'http://localhost:3000/index.php?route=account/register',
    text_register: 'Register',
    login: 'http://localhost:3000/index.php?route=account/login',
    text_login: 'Login',
    logo: false,
    home: '/',
    name: 'Your Store'
};

const headerReducer = (state = initialState, action) => {
    return state;
};

export default headerReducer;