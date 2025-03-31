function addItemToShoppingList() {
    const lists = model.data.users[model.app.currentUserId].lists
    lists[0].listItems.push({
        itemId: lists.length,
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
    model.data.users[model.app.currentUserId].lists[0].listItems.splice(itemId, 1)
    updateView();
}

function markItemAsBought(checkbox, itemId) {
    model.data.users[model.app.currentUserId].lists[0].listItems[itemId].hasBeenBought = checkbox.checked;
    console.log(model.data.users[model.app.currentUserId].lists[0].listItems[itemId].hasBeenBought)
}