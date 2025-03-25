const model = {
    app: {
        currentPage: '',
        currentUser: 0
    },
    input: {
        loginPage: {
            username: '',
            password: '',
            rememberMe: false,
        }
    },
    data: {
        loginPage: {
            username: '',
            password: '',
            rememberMe: false,
        },
        users: [
            {
                id: 0,
                username: '',
                password: '',
                groupsId: [0],
                privateLists: [{
                    listType: '',
                    listName: '',
                    listId: '',
                    private: true,
                }],
                recentList: 1,
                shoppingLog: [{}],
            },
            {
                id: 1,
                username: '',
                password: '',
                groupsId: '',
                privateLists: '',
                recentList: '',
                shoppingLog: '',
            }
        ],
        groups: [
            {
                id: 0,
                name: 'Rubber Duck As',
                usersId: [0, 1]
            },
            {
                id: 1,
                name: 'Family group',
                usersId: [0, 1]
            }
        ],
        dashBoard: {
            id: '',
        },
        privateLists: {

        },

        shoppingList: {
            items: [{ name: '', amount: '' }],
        },
        favoriteItems: [
            { name: '', amount: '1' }
        ],
    }
}