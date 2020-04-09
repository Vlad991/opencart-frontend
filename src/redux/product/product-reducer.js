import React from "react";

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
    heading_title: 'MacBook',
    thumb: '/image/catalog/demo/macbook_1.jpg',
    images: [
        {thumb: '/image/catalog/demo/macbook_5.jpg'},
        {thumb: '/image/catalog/demo/macbook_4.jpg'},
        {thumb: '/image/catalog/demo/macbook_2.jpg'},
        {thumb: '/image/catalog/demo/macbook_3.jpg'},
    ],
    text_manufacturer: 'Brand:',
    manufacturer: 'Apple',
    text_model: 'Product Code:',
    model: 'Product 16',
    text_reward: 'Reward Points:',
    reward: '600',
    text_stock: 'Availability:',
    stock: 'In Stock',
    price: '472.33€',
    tax: '392.30€',
    text_tax: 'Ex Tax:',
    entry_qty: 'Qty',
    minimum: 1,
    tab_description: 'Description',
    tab_specification: 'Description',
    attribute_groups: [],
    description: <div>
        <p><b>Intel Core 2 Duo processor</b></p>
        <p>Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.</p>
        <p><b>1GB memory, larger hard drives</b></p>
        <p>The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.</p>
        <p><b>Sleek, 1.08-inch-thin design</b></p>
        <p>MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.</p>
        <p><b>Built-in iSight camera</b></p>
        <p>Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth</p>
    </div>,
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

const productReducer = (state = initialState, action) => {
    return state;
};

export default productReducer;