function addItemToList(typeOfList) {
    const currentUser = model.data.users[model.app.currentUserId]
    currentUser.lists[currentUser.currentSelectedListId].listItems.push({
        itemId: currentUser.lists[currentUser.currentSelectedListId].listItems.length,
        name: typeOfList.name,
        amount: typeOfList.amount,
        price: typeOfList.price,
        hasBeenBought: false,
        whoIsRecipient: typeOfList.whoIsRecipient
    });
    typeOfList.name = '';
    typeOfList.amount = null;
    typeOfList.price = null;
    typeOfList.whoIsTheRecipient = '';
    updateView();
}

function removeItemFromList(itemId) {
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