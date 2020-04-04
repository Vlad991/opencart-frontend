import {rerenderEntireTree} from "../render";

let state = {
    common: {
        cart: {
            text_loading: 'Loading...',
            text_items: '0 item(s) - £0.00'
        },
        currency: {
            action: 'http://localhost:3000/index.php?route=common/currency/currency',
            text_currency: 'Currency',
            redirect: 'http://localhost:3000/index.php?route=common/home',
            currencies: [
                {
                    code: 'EUR',
                    symbol_left: '€',
                    title: 'Euro'
                },
                {
                    code: 'GBR',
                    symbol_left: '£',
                    title: 'Pound Sterling'
                },
                {
                    code: 'USD',
                    symbol_left: '$',
                    title: 'US Dollar'
                }
            ],
            code: 'GBR'
        },
        header: {
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
            home: 'http://localhost:3000/index.php?route=common/home',
            name: 'Your Store'
        },
        footer: {},
        language: {
            language: 'EN',
            languages: [
                {
                    code: 'EN'
                }
            ]
        },
        menu: {
            text_category: 'Categories',
            text_all: 'Show All',
            categories: [
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=20',
                    name: 'Desktops',
                    column: 1,
                    children: [
                        {
                            href: '#',
                            name: 'PC (0)'
                        },
                        {
                            href: '#',
                            name: 'Mac (1)'
                        },
                    ]
                },
                {
                    href: 'http://localhost:8888/index.php?route=product/category&path=18',
                    name: 'Laptops & Notebooks',
                    column: 1,
                    children: [
                        {
                            href: '#',
                            name: 'Macs (0)'
                        },
                        {
                            href: '#',
                            name: 'Windows (0)'
                        },
                    ]
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=25',
                    name: 'Components',
                    column: 1,
                    children: [
                        {
                            href: '#',
                            name: 'Mice and Trackballs (0)'
                        },
                        {
                            href: '#',
                            name: 'Monitors (2)'
                        },
                        {
                            href: '#',
                            name: 'Printers (0)'
                        },
                        {
                            href: '#',
                            name: 'Scanners (0)'
                        },
                        {
                            href: '#',
                            name: 'Web Cameras (0)'
                        },
                    ]
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=57',
                    name: 'Tablets',
                    column: 1,
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=17',
                    name: 'Software',
                    column: 1,
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=24',
                    name: 'Phones & PDAs',
                    column: 1,
                },
                {
                    href: 'http://localhost:8888/index.php?route=product/category&path=33',
                    name: 'Cameras',
                    column: 1
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=34',
                    name: 'MP3 Players',
                    column: 4,
                    children: [
                        {
                            href: '#',
                            name: 'test 11 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 12 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 15 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 16 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 17 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 18 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 19 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 20 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 21 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 22 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 23 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 24 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 4 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 5 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 6 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 7 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 8 (0)'
                        },
                        {
                            href: '#',
                            name: 'test 9 (0)'
                        },
                    ]
                },
            ]
        },
        search: {
            text_search: 'Search'
        }
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};


export default state;