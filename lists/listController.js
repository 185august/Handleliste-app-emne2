function addItemToList(typeOfList) {
    //const currentUser = model.data.users[model.app.currentUserId]
    model.app.currentListPath.listItems.push({
        itemId: model.app.currentListPath.listItems.length,
        name: typeOfList.name,
        amount: typeOfList.amount,
        price: typeOfList.price,
        hasBeenBought: false,
        whoIsTheRecipient: typeOfList.whoIsTheRecipient
    });
    typeOfList.name = '';
    typeOfList.amount = null;
    typeOfList.price = null;
    typeOfList.whoIsTheRecipient = '';
    showInput = false;
    updateView();
}

function toggleInput() {
    showInput = !showInput;
    updateView();
}

function removeItemFromList(itemId) {
    model.app.currentListPath.listItems.find(id => {
        if (id === itemId) {
            model.app.currentListPath.listItems[itemId] = '';
            updateView();
        }
    })
    model.app.currentListPath.listItems.splice(itemId, 1)

    updateView();
}

function markItemAsBought(checkbox, itemId) {
    model.app.currentListPath.listItems[itemId].hasBeenBought = checkbox.checked;
    updateView();
}

function pushListToLog() {
    model.app.currentListPath.isCompleted = true;
    model.app.currentListPath.date = new Date().toLocaleDateString();
    model.data.users[model.app.currentUserId].log.push(model.app.currentListPath);
    goToDashboardPage();
}

function renderListItems() {
    let listItemsHtml = '';
    model.app.currentListPath.listItems.sort((a, b) => a.hasBeenBought - b.hasBeenBought)
    for (let i = model.app.currentListPath.listItems.length - 1; i >= 0; i--) {
        model.app.currentListPath.listItems[i].itemId = i;
    }
    model.app.currentListPath.listItems.forEach(item => {
        listItemsHtml += /*HTML*/ ` 
            <div id="listItem${item.itemId}" class="${item.hasBeenBought ? 'list-bought' : 'list'}">
                <div class="list-item">Vare: ${item.name} </div>
                ${item.amount ? `<div class="list-amount">Antall: ${item.amount} </div>` : ''}
                ${item.price ? `<div class="list-price">Pris: ${item.price} kr</div>` : ''}
                ${item.whoIsTheRecipient ? `<div class="list-recipient">Til: ${item.whoIsTheRecipient}</div>` : ''}
                ${model.app.currentListPath.isCompleted ? '' : `Kjøpt <input class="list-checkbox" onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />`}
                ${model.app.currentListPath.isCompleted ? '' : `Fjern <button class="list-button" onclick="removeItemFromList(${item.itemId}, ${item.listId})"> X</button>`}
                
                </div > `
    });
    return listItemsHtml;
}


/* model.app.currentListPath.listItems.find(id => {
    if (id == itemId && id.hasBeenBought) {
        model.app.currentListPath.listItems.push(model.app.currentListPath.listItems[itemId]);
        model.app.currentListPath.listItems.splice(itemId, 1);
    }
}) */
/* if (checkbox.checked) {
    document.querySelector(`#listItem${ itemId } `).classList.add('list-bought');
    document.querySelector(`#listItem${ itemId } `).style.order = model.app.currentListPath.listItems.length;
} else {
    document.querySelector(`#listItem${ itemId } `).classList.remove('list-bought')
    document.querySelector(`#listItem${ itemId } `).classList.add('list')
    document.querySelector(`#listItem${ itemId } `).style.order = itemId;
} */
