function addItemToList(typeOfList) {
    //const currentUser = model.data.users[model.app.currentUserId]
    if (isBlank(typeOfList.name)) {
        alert("Varen må ha et navn");
        return;
    }
    if (isBlank(typeOfList.amount)) {
        typeOfList.amount = 1;
    }
    if (!parseInt(typeOfList.amount)) {
        alert("Skriv inn et tall");
        return;
    }

    model.app.currentListPath.listItems.push({
        itemId: createNewId(model.app.currentListPath.listItems, 'itemId'),
        name: typeOfList.name,
        amount: typeOfList.amount,
        price: typeOfList.price,
        hasBeenBought: false,
        whoIsTheRecipient: typeOfList.whoIsTheRecipient,
        whoAddedItemId: model.app.previousPage.includes('groupsOverview') ? model.app.currentUserId : null,
    });
    typeOfList.name = '';
    typeOfList.amount = null;
    typeOfList.price = null;
    typeOfList.whoIsTheRecipient = '';
    showAddNewItemInput = false;
    updateView();
}

function toggleInput() {
    showAddNewItemInput = !showAddNewItemInput;
    updateView();
}

function removeItemFromList(id) {
    const itemIndex = model.app.currentListPath.listItems.findIndex(obj => obj.itemId === id)
    model.app.currentListPath.listItems.splice(itemIndex, 1)
    updateView();
}

function markItemAsBought(checkbox, id) {
    const itemIndex = model.app.currentListPath.listItems.findIndex(obj => obj.itemId === id)
    model.app.currentListPath.listItems[itemIndex].hasBeenBought = checkbox.checked;
    updateView();
}

function pushListToLog() {
    model.app.currentListPath.isCompleted = true;
    model.app.currentListPath.date = new Date().toLocaleDateString();

    const user = model.data.users.find(obj => obj.userId === model.app.currentUserId);
    const listIndex = user.lists.findIndex(obj => obj.listId === model.app.currentListPath.listId);
    //Update favorite item list
    addItemToFavoriteList();

    user.log.unshift(model.app.currentListPath);
    //model.data.users[userIndex].log.unshift(model.app.currentListPath);
    user.lists.splice(listIndex, 1)
    orderFavoriteItemList();
    setPage('dashboard');
}

function renderListItems() {
    let listItemsHtml = '';
    model.app.currentListPath.listItems.sort((a, b) => a.hasBeenBought - b.hasBeenBought)
    model.app.currentListPath.listItems.forEach(item => {
        listItemsHtml += /*HTML*/ ` 
            <div id="listItem${item.itemId}" class="${item.hasBeenBought ? 'list-bought' : 'list'}">
                <div class="list-item">Vare: ${item.name} </div>
                ${item.amount ? `<div class="list-amount">Antall: ${item.amount} </div>` : ''}
                ${item.price ? `<div class="list-price">Pris: ${item.price} kr</div>` : ''}
                ${item.whoIsTheRecipient ? `<div class="list-recipient">Til: ${item.whoIsTheRecipient}</div>` : ''}
                ${model.app.currentListPath.isCompleted ? '' : `Kjøpt <input class="list-checkbox" onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />`}
                ${model.app.currentListPath.isCompleted ? '' : `Fjern <button class="list-button" onclick="removeItemFromList(${item.itemId}, ${item.listId})"> ❌</button>`}
                </div > 
                ${model.app.previousPage.includes('groupsOverview') ? `<h4>${model.data.users.find(obj => obj.userId == item.whoAddedItemId).username ?? ''}</h4>` : ''}
                `
    });
    return listItemsHtml;
}

