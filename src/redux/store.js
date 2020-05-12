import {rerenderEntireTree} from "../render";
import React from 'react';

let store = {
    common: {
        cart: {
            text_loading: 'Loading...',
            text_items: '0 item(s) - £0.00',
            text_empty: 'Your shopping cart is empty!'
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
            home: '/',
            name: 'Your Store'
        },
        footer: {
            text_information: 'Information',
            informations: [
                {
                    href: '#',
                    title: 'About Us'
                },
                {
                    href: '#',
                    title: 'Delivery Information'
                },
                {
                    href: '#',
                    title: 'Privacy Policy'
                },
                {
                    href: '#',
                    title: 'Terms & Conditions'
                },
            ],
            text_service: 'Customer Service',
            contact: '#',
            text_contact: 'Contact Us',
            return: '#',
            text_return: 'Returns',
            sitemap: '#',
            text_sitemap: 'Site Map',
            text_extra: 'Extras',
            manufacturer: '#',
            text_manufacturer: 'Brands',
            voucher: '#',
            text_voucher: 'Gift Certificates',
            affiliate: '#',
            text_affiliate: 'Affiliate',
            special: '#',
            text_special: 'Specials',
            text_account: 'My Account',
            order: '#',
            text_order: 'Order History',
            wishlist: '#',
            text_wishlist: 'Wish List',
            newsletter: '#',
            text_newsletter: 'Newsletter',
            powered: ''
        },
        home: {
            content_top: true
        },
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
    extension: {
        module: {
            carousel: {
                module: 0,
                banners: [
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/nintendo.png',
                        title: 'Nintendo'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/nfl.png',
                        title: 'NFL'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/redbull.png',
                        title: 'RedBull'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/sony.png',
                        title: 'Sony'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/cocacola.png',
                        title: 'Coca Cola'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/burgerking.png',
                        title: 'Burger King'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/canon.png',
                        title: 'Canon'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/harley.png',
                        title: 'Harley Davidson'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/dell.png',
                        title: 'Dell'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/disney.png',
                        title: 'Disney'
                    },
                    {
                        link: '#',
                        image: '/image/catalog/demo/manufacturer/starbucks.png',
                        title: 'Starbucks'
                    },
                ]
            },
            category: {
                category_id: 2,
                categories: [
                    {
                        category_id: 1,
                        href: '#',
                        name: 'Desktops (13)',
                        children: [
                            {
                                category_id: 11,
                                href: '#',
                                name: 'PC (0)'
                            },
                            {
                                category_id: 12,
                                href: '#',
                                name: 'Mac (1)'
                            }
                        ]
                    },
                    {
                        category_id: 2,
                        href: '#',
                        name: 'Laptops & Notebooks (5)',
                        children: [
                            {
                                category_id: 22,
                                href: '#',
                                name: 'Macs (0)'
                            },
                            {
                                category_id: 23,
                                href: '#',
                                name: 'Windows (0)'
                            }
                        ]
                    },
                    {
                        category_id: 3,
                        href: '#',
                        name: 'Components (2)'
                    },
                    {
                        category_id: 4,
                        href: '#',
                        name: 'Tablets (1)'
                    },
                    {
                        category_id: 5,
                        href: '#',
                        name: 'Software (0)'
                    },
                    {
                        category_id: 6,
                        href: '#',
                        name: 'Phones & PDAs (3)'
                    },
                    {
                        category_id: 7,
                        href: '#',
                        name: 'Cameras (2)'
                    },
                    {
                        category_id: 8,
                        href: '#',
                        name: 'MP3 Players (4)'
                    }
                ]
            },
            featured: {
                heading_title: 'Featured',
                text_tax: 'Ex Tax:',
                button_cart: 'Add to Cart',
                products: [
                    {
                        name: 'MacBook',
                        description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                        href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                        thumb: '/image/catalog/demo/macbook_1.jpg',
                        price: '£368.73',
                        special: '£300',
                        tax: '£306.25',
                        rating: 4
                    },
                    {
                        name: 'MacBook',
                        description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                        href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                        thumb: '/image/catalog/demo/macbook_1.jpg',
                        price: '£368.73',
                        special: '£300',
                        tax: '£306.25',
                        rating: 2
                    },
                    {
                        name: 'MacBook',
                        description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                        href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                        thumb: '/image/catalog/demo/macbook_1.jpg',
                        price: '£368.73',
                        special: '£300',
                        tax: '£306.25',
                        rating: 4
                    },
                    {
                        name: 'MacBook',
                        description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                        href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                        thumb: '/image/catalog/demo/macbook_1.jpg',
                        price: '£368.73',
                        special: '£300',
                        tax: '£306.25',
                        rating: 4
                    },
                ]
            },
            slideshow: {
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
            }
        }
    },
    product: {
        category: {
            breadcrumbs: [
                {
                    href: 'http://localhost:3000/index.php?route=common/home',
                    text: <i class="fa fa-home"></i>
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=20',
                    text: 'Desktops'
                },
                {
                    href: 'http://localhost:3000/index.php?route=product/category&path=20_26',
                    text: 'PC'
                }
            ],
            column_left: true,
            heading_title: 'Laptops & Notebooks',
            thumb: '/image/catalog/demo/hp_2.jpg',
            description: 'Shop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.',
            text_refine: 'Refine Search',
            categories: [
                {
                    name: 'Macs (0)',
                    href: '#'
                },
                {
                    name: 'Windows (0)',
                    href: '#'
                }
            ],
            text_sort: 'Sort By',
            sorts: [{href: '#', text: 'Default'}, {href: '#', text: 'Name (A-Z)'}, {href: '#', text: 'Name (Z-A)'},],
            text_limit: 'Show',
            limits: [{href: '#', text: '5'}, {href: '#', text: '10'}, {href: '#', text: '25'}],
            text_compare: 'Product Compare(0)',
            products: [
                {
                    name: 'MacBook',
                    description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                    href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                    thumb: '/image/catalog/demo/macbook_1.jpg',
                    price: '£368.73',
                    special: '£300',
                    tax: '£306.25',
                    rating: 4
                },
                {
                    name: 'MacBook',
                    description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                    href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                    thumb: '/image/catalog/demo/macbook_1.jpg',
                    price: '£368.73',
                    special: '£300',
                    tax: '£306.25',
                    rating: 2
                },
                {
                    name: 'MacBook',
                    description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                    href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                    thumb: '/image/catalog/demo/macbook_1.jpg',
                    price: '£368.73',
                    special: '£300',
                    tax: '£306.25',
                    rating: 4
                },
                {
                    name: 'MacBook',
                    description: 'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..',
                    href: 'http://localhost:3000/index.php?route=product/product&product_id=43',
                    thumb: '/image/catalog/demo/macbook_1.jpg',
                    price: '£368.73',
                    special: '£300',
                    tax: '£306.25',
                    rating: 4
                },
            ],
            text_empty: 'There are no products to list in this category.',
            button_continue: 'Continue',
            button_cart: 'Add to Cart'
        },
        product: {}
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
    store.profilePage.posts.push(newPost);
    rerenderEntireTree(store);
};


//export default store;