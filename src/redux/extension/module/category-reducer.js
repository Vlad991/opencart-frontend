let initialState = {
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
};

const categoryReducer = (state = initialState, action) => {
    return state;
};

export default categoryReducer;