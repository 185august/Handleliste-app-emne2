function addItemToShoppingList() {
    const currentUser = model.data.users[model.app.currentUserId]
    currentUser.lists[currentUser.currentSelectedListId].listItems.push({
        itemId: currentUser.lists[currentUser.currentSelectedListId].listItems.length,
        name: model.input.shoppingList.addItem,
        amount: model.input.shoppingList.amount,
        price: null,
        hasBeenBought: false,
        whoIsRecipient: ''
    });
    model.input.shoppingList.addItem = '';
    model.input.shoppingList.amount = null;
    updateView();
}

function removeItemFromShoppingList(itemId) {
    const currentUser = model.data.users[model.app.currentUserId]
    currentUser.lists[currentUser.currentSelectedListId].listItems.splice(itemId, 1)
    for (let i = currentUser.lists[currentUser.currentSelectedListId].listItems.length - 1; i >= 0; i--) {
        currentUser.lists[currentUser.currentSelectedListId].listItems[i].itemId = i
    }
    updateView();
}

function markItemAsBought(checkbox, itemId) {
    const currentUser = model.data.users[model.app.currentUserId]
    currentUser.lists[currentUser.currentSelectedListId].listItems[itemId].hasBeenBought = checkbox.checked;
}