
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