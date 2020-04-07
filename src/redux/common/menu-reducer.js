let initialState = {
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
};

const menuReducer = (state = initialState, action) => {
    return state;
};

export default menuReducer;