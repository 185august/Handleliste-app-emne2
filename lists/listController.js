function addItemToList(typeOfList) {
    //const currentUser = model.data.users[model.app.currentUserId]
    model.app.currentListPath.listItems.push({
        itemId: model.app.currentListPath.length,
        name: typeOfList.name,
        amount: typeOfList.amount,
        price: typeOfList.price,
        hasBeenBought: false,
        whoIsRecipient: typeOfList.whoIsTheRecipient
    });
    typeOfList.name = '';
    typeOfList.amount = null;
    typeOfList.price = null;
    typeOfList.whoIsTheRecipient = '';
    updateView();
}

function removeItemFromList(itemId) {
    //const currentUser = model.data.users[model.app.currentUserId]
    model.app.currentListPath.listItems.splice(itemId, 1)
    for (let i = model.app.currentListPath.listItems.length - 1; i >= 0; i--) {
        model.app.currentListPath.listItems[i].itemId = i
    }
    updateView();
}

function markItemAsBought(checkbox, itemId) {
    //const currentUser = model.data.users[model.app.currentUserId]
    model.app.currentListPath.listItems[itemId].hasBeenBought = checkbox.checked;
    if (checkbox.checked) {
        document.querySelector(`#listItem${itemId}`).style.textDecoration = "line-through";
        document.querySelector(`#listItem${itemId}`).style.order = model.app.currentListPath.listItems.length;
    } else {
        document.querySelector(`#listItem${itemId}`).style.textDecoration = "none";
        document.querySelector(`#listItem${itemId}`).style.order = itemId;
    }
}