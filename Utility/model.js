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
        users: [
            {
                userId: 0,
                username: '',
                password: '',
                groupsId: [0],
                recentListId: 0,
                rememberMe: false,
                privateListId: [0],
                privateWishListId: [0]

            }
        ],
        groups: [
            {
                groupId: 0,
                name: 'Rubber Duck As',
                usersId: [0, 1],
                adminUserId: [0],
                groupShoppingListId: [0],
                groupWishListId: [0]
                //groupList (referanse eller ha det rett her?)
            },
            {
                groupId: 1,
                name: 'Family group',
                usersId: [0, 1],
                adminUserId: [0],
                groupShoppingListId: [1],
                groupWishListId: [1]
                //groupList (referanse eller ha det rett her?)
            }
        ],
        lists: [{
            shoppingList: {
                groupLists: [{
                    groupId: 0,
                    listName: 'handle til bursdag',
                    groupShoppingListId: 0,
                    usersCanView: [0, 1],
                    usersCanEdit: [0],
                    isCompleted: false,
                    listItems: [{
                        itemId: 0,
                        name: '',
                        amount: '',
                        hasBeenBought: false
                    }]
                }],
                privateLists: [{
                    userId: 0,
                    listName: 'handle til bursdag',
                    privateShoppingListId: 0,
                    isCompleted: false,
                    listItems: [{
                        itemId: 0,
                        name: '',
                        amount: '',
                        hasBeenBought: false
                    }]
                }],
            },
            wishList: {
                groupLists: [{
                    groupId: 0,
                    listName: 'handle til bursdag',
                    groupWishListId: 0,
                    usersCanView: [0, 1],
                    usersCanEdit: [0],
                    isCompleted: false,
                    listItems: [{
                        itemId: 0,
                        name: '',
                        amount: '',
                        hasBeenBought: false,
                        whoIsTheRecipient: ''
                    }]
                }],
                privateLists: [{
                    userId: 0,
                    listName: 'handle til bursdag',
                    privateWishListId: 0,
                    usersCanView: [0, 1],
                    isCompleted: false,
                    listItems: [{
                        itemId: 0,
                        name: '',
                        amount: '',
                        hasBeenBought: false,
                        whoIsTheRecipient: ''
                    }]
                }],
            },
            favoriteItemsList: [{
                userId: 0,
                favoriteItemsListId: 0,
                favoriteItems: [{
                    itemId: null,
                    name: 'Melk',
                    amountRecentlyBought: 5,
                    rank: 3
                }],
            }],
        },
        ],
        listLog: [{
            userId: 0,
            listName: 'handle til bursdag',
            privateShoppingListId: 0,
            date: '26/3/2025',
        }]
    }
}