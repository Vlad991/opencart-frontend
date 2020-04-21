import React from "react";

const SET_CATEGORY_STATE = 'SET-CATEGORY-STATE';

let initialState = {
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
    column_left: {
        modules: [{categories: []}]
    },
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
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_STATE:
            return {
                ...action.state,
                breadcrumbs: [...action.state.breadcrumbs],
                categories: [...action.state.categories],
                sorts: [...action.state.sorts],
                limits: [...action.state.limits],
                products: [...action.state.products]
            };
        default:
            return state;
    }
};

export const setStateActionCreator = (state) => ({type: SET_CATEGORY_STATE, state});
export default categoryReducer;