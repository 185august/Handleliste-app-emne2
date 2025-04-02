
function addItemFromFavoritesToShoppingList(element) {
    model.app.currentListPath.listItems.push({
        itemId: model.app.currentListPath.length,
        name: element,
        amount: 1,
        price: '',
        hasBeenBought: false,
        whoIsRecipient: '',
    })
    updateView();
}