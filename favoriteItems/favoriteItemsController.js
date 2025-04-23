
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
    const favList = model.data.users.find(obj => obj.userId == model.app.currentUserId).favoriteItemsList.favoriteItems
    favList.sort((a, b) => b.amountRecentlyBought - a.amountRecentlyBought)
    for (let i = 0; i < favList.length; i++) {
        favList[i].rank = (i + 1);
    }
}