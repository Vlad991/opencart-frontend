let initialState = {
    text_category: 'Categories',
    text_all: 'Show All',
    categories: [
        {
            href: '/product/category/20',
            name: 'Desktops',
            column: 1,
            children: [
                {
                    href: '/product/category/20',
                    name: 'PC (0)'
                },
                {
                    href: '/product/category/20',
                    name: 'Mac (1)'
                },
            ]
        },
        {
            href: '/product/category/18',
            name: 'Laptops & Notebooks',
            column: 1,
            children: [
                {
                    href: '/product/category/18',
                    name: 'Macs (0)'
                },
                {
                    href: '/product/category/18',
                    name: 'Windows (0)'
                },
            ]
        },
        {
            href: '/product/category/25',
            name: 'Components',
            column: 1,
            children: [
                {
                    href: '/product/category/25',
                    name: 'Mice and Trackballs (0)'
                },
                {
                    href: '/product/category/25',
                    name: 'Monitors (2)'
                },
                {
                    href: '/product/category/25',
                    name: 'Printers (0)'
                },
                {
                    href: '/product/category/25',
                    name: 'Scanners (0)'
                },
                {
                    href: '/product/category/25',
                    name: 'Web Cameras (0)'
                },
            ]
        },
        {
            href: '/product/category/57',
            name: 'Tablets',
            column: 1,
        },
        {
            href: '/product/category/17',
            name: 'Software',
            column: 1,
        },
        {
            href: '/product/category/24',
            name: 'Phones & PDAs',
            column: 1,
        },
        {
            href: '/product/category/33',
            name: 'Cameras',
            column: 1
        },
        {
            href: '/product/category/34',
            name: 'MP3 Players',
            column: 4,
            children: [
                {
                    href: '/product/category/34',
                    name: 'test 11 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 12 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 15 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 16 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 17 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 18 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 19 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 20 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 21 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 22 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 23 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 24 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 4 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 5 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 6 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 7 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 8 (0)'
                },
                {
                    href: '/product/category/34',
                    name: 'test 9 (0)'
                },
            ]
        },
    ]
};

const menuReducer = (state = initialState, action) => {
    return state;
};

export default menuReducer;