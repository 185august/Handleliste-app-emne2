const model = {
    app: {
        currentPage: 'dashboard',
        previousPage: [],
        currentUserId: 0,
        currentListPath: null,
        currentGroupId: null,
    },
    input: {
        loginPage: {
            username: '',
            password: '',
            rememberMe: false,
        },
        createNewList: {
            name: '',
            typeOfList: '',
            showInput: false,
        },
        shoppingList: {
            name: '',
            amount: null,
            hasBeenBought: false
        },
        groupShoppingList: {
            name: '',
            amount: null,
            whoAddedItem: '',
            hasBeenBought: false
        },
        wishlist: {
            name: '',
            amount: null,
            price: null,
            whoIsTheRecipient: '',
            hasBeenBought: false,
        },
        groupWishList: {
            name: '',
            amount: null,
            price: null,
            hasBeenBought: false,
            whoIsTheRecipient: '',
        },
        createNewGroup: {
            name: '',
            username: '',
            usersInGroup: [],
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
                    username: 'kattunge',
                    password: 'passord',
                    groupsId: [0, 1],
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
                                        whoIsTheRecipient: '',
                                    },
                                    {
                                        itemId: 1,
                                        name: 'Smør',
                                        amount: 1,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: '',
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
                                        whoIsTheRecipient: 'Anders'
                                    }
                                ],
                            }
                        ],

                    favoriteItemsList: {
                        listType: 'favoriteList',
                        favoriteItems: [
                            {
                                itemId: 0,
                                name: 'Melk',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 8,
                                rank: 1
                            },
                            {
                                itemId: 1,
                                name: 'Agurk',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 6,
                                rank: 2
                            },
                            {
                                itemId: 2,
                                name: 'Smør',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 4,
                                rank: 3
                            }],
                            
                    },
                    log:
                        [
                            {
                                listId: 0,
                                listType: 'shoppingList',
                                listName: 'handle til bursdag',
                                isCompleted: true,
                                date: '26/3/2025',
                                listItems:
                                    [
                                        {
                                            itemId: 0,
                                            name: 'Kake',
                                            amount: 1,
                                            price: null,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: '',
                                        },
                                        {
                                            itemId: 1,
                                            name: 'Coca cola',
                                            amount: 4,
                                            price: null,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: '',
                                        }
                                    ],
                            }
                        ]
                }, {
                    userId: 1,
                    username: 'venn',
                    password: 'passord',
                    groupsId: [0, 1],
                    recentListId: 0,
                    rememberMe: false,
                    lists:
                        [
                            {
                                listId: 0,
                                listType: 'shoppingList',
                                isPrivate: true,
                                listName: 'handle',
                                isCompleted: false,
                                listItems: [
                                    {
                                        itemId: 0,
                                        name: 'kattMelk',
                                        amount: 1,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: '',
                                    },
                                    {
                                        itemId: 1,
                                        name: 'tunfisk',
                                        amount: 1,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: '',
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
                                        name: 'cat wheel',
                                        amount: 1,
                                        price: 10000,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: 'Anders'
                                    }
                                ],
                            }
                        ],

                    favoriteItemsList: {
                        listType: 'favoriteList',
                        favoriteItems: [
                            {
                                itemId: 0,
                                name: 'tunfisk',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 8,
                                rank: 1
                            },
                            {
                                itemId: 1,
                                name: 'fiskestang',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 6,
                                rank: 2
                            },
                            {
                                itemId: 2,
                                name: 'mus',
                                price: null,
                                whoIsTheRecipient: null,
                                amountRecentlyBought: 4,
                                rank: 3
                            }],
                            
                    },
                    log:
                        [
                            {
                                listId: 0,
                                listType: 'shoppingList',
                                listName: 'handle til bursdag',
                                isCompleted: true,
                                date: '26/3/2025',
                                listItems:
                                    [
                                        {
                                            itemId: 0,
                                            name: 'jerky',
                                            amount: 1,
                                            price: null,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: '',
                                        },
                                        {
                                            itemId: 1,
                                            name: 'kattemat',
                                            amount: 4,
                                            price: null,
                                            hasBeenBought: false,
                                            whoIsTheRecipient: '',
                                        }
                                    ],
                            }
                        ]
                }
            ],
        groups:
            [
                {
                    groupId: 0,
                    name: 'Rubber Duck As',
                    usersId: [0, 1],
                    adminUserId: [0],
                    showLists: false,
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
                                            whoIsTheRecipient: '',
                                            whoAddedItemId: 0,
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
                                        whoIsTheRecipient: '',
                                        whoAddedItemId: 0,
                                    }]
                            }
                        ],
                },
                {
                    groupId: 1,
                    name: 'Family group',
                    usersId: [0, 1],
                    adminUserId: [0],
                    showLists: false,
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
                                        whoIsTheRecipient: '',
                                        whoAddedItemId: 0,
                                    },
                                    {
                                        itemId: 1,
                                        name: 'brus',
                                        amount: 10,
                                        price: null,
                                        hasBeenBought: false,
                                        whoIsTheRecipient: '',
                                        whoAddedItemId: 0,
                                    }
                                ],
                            },
                            {
                                listId: 1,
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
                                        whoIsTheRecipient: null,
                                        whoAddedItemId: 0,
                                    }
                                ]
                            }
                        ],
                }
            ],
    }
}