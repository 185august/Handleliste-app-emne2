
function addItemFromFavoritesToShoppingList(element) {
    model.app.currentListPath.listItems.push({
        itemId: createNewId(model.app.currentListPath.listItems, 'itemId'),
        name: element,
        amount: 1,
        price: '',
        hasBeenBought: false,
        whoIsRecipient: '',
    })
    updateView();
}

function orderFavoriteItemList() {
    for (let i = 0; i < model.data.users.find(obj => obj.userId == model.app.currentUserId).favoriteItemsList.favoriteItems.length; i++) {
        const element = array[i];

    }
}