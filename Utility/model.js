const model = {
    app: {
        currentPage: '',
        currentUserId: 0
    },
    input: {
        loginPage: {
            username: '',
            password: '',
            rememberMe: false,
        },
        shoppingList: {
            addItem: '',
            amount: null,
            hasBeenBought: false
        },
        groupShoppingList: {
            addItem: '',
            amount: null,
            whoAddedItem: '',
            hasBeenBought: false
        },
        wishList: {
            addItem: '',
            amount: null,
            itemPrice: null,
            hasBeenBought: false,
        },
        groupWishList: {
            addItem: '',
            amount: null,
            itemPrice: null,
            hasBeenBought: false,
            whoIsTheRecipient: '',
        },
        favoriteItemsList: {
            addItem: '',
            itemRank: null,
        }
    },
    data: {
        users:
            [
                {
                    userId: 0,
                    username: '',
                    password: '',
                    groupsId: [0],
                    recentListId: 0,
                    rememberMe: false,

                    lists:
                        [
                            {
                                listId: 0,
                                listType: 'shoppingList',
                                isPrivate: true,
                                listName: 'handle til bursdag',
                                isCompleted: false,
                                listItems: [
                                    {
                                        itemId: 0,
                                        name: 'Melk',
                                        amount: 1,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: null,
                                    },
                                    {
                                        itemId: 1,
                                        name: 'Smør',
                                        amount: 1,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: null,
                                    }
                                ],
                            },
                            {
                                listId: 1,
                                listType: 'wishlist',
                                isPrivate: false,
                                listName: 'Ønske liste',
                                usersCanView: [0, 1],
                                isCompleted: false,
                                listItems: [
                                    {
                                        itemId: 0,
                                        name: 'Sykkel',
                                        amount: 1,
                                        price: 10000,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: ''
                                    }
                                ],
                            }
                        ],

                    favoriteItemsList: [{
                        listType: 'favoriteList',
                        favoriteItems: [
                            {
                                itemId: null,
                                name: 'Melk',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 5,
                                rank: 3
                            }],
                    }],
                    log:
                        [
                            {
                                listType: 'shoppingList',
                                listName: 'handle til bursdag',
                                listId: 0,
                                date: '26/3/2025',
                                listItems:
                                    [
                                        {
                                            itemId: 0,
                                            name: 'Kake',
                                            amount: 1,
                                            price: null,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: null,
                                        },
                                        {
                                            itemId: 1,
                                            name: 'Coca cola',
                                            amount: 4,
                                            price: null,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: null,
                                        }
                                    ],
                            }
                        ]
                },
            ],
        groups:
            [
                {
                    groupId: 0,
                    name: 'Rubber Duck As',
                    usersId: [0, 1],
                    adminUserId: [0],
                    lists:
                        [
                            {
                                listId: 0,
                                listType: 'wishlist',
                                listName: 'ting vi trenger på jobben',
                                usersCanView: [0, 1],
                                usersCanEdit: [0],
                                isCompleted: false,
                                listItems:
                                    [
                                        {
                                            itemId: 0,
                                            name: 'Ny skriver',
                                            amount: 1,
                                            price: 10000,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: null,
                                        }
                                    ]
                            },
                            {
                                listId: 1,
                                listType: 'shoppingList',
                                listName: 'handle til jobbfest',
                                usersCanView: [0, 1],
                                usersCanEdit: [0],
                                isCompleted: false,
                                listItems: [
                                    {
                                        itemId: 0,
                                        name: 'pizza',
                                        amount: 3,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: null,
                                    }]
                            }
                        ],
                },
                {
                    groupId: 1,
                    name: 'Family group',
                    usersId: [0, 1],
                    adminUserId: [0],
                    lists:
                        [
                            {
                                listId: 0,
                                listType: 'shoppingList',
                                listName: 'handle til bursdag',
                                usersCanView: [0, 1],
                                usersCanEdit: [0],
                                isCompleted: false,
                                listItems: [
                                    {
                                        itemId: 0,
                                        name: 'iskrem',
                                        amount: 5,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: null,
                                    },
                                    {
                                        itemId: 1,
                                        name: 'brus',
                                        amount: 10,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: null,
                                    }
                                ],
                            },
                            {
                                listId: 0,
                                listType: 'wishlist',
                                listName: 'ting vi trenger i huset',
                                usersCanView: [0, 1],
                                usersCanEdit: [0],
                                isCompleted: false,
                                listItems: [
                                    {
                                        itemId: 0,
                                        name: 'nytt bord',
                                        amount: 1,
                                        price: 4000,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: null
                                    }
                                ]
                            }
                        ],
                }
            ],
    }
}