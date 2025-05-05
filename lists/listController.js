function addItemToList(typeOfList) {
    //const currentUser = model.data.users[model.app.currentUserId]
    const currentPage = model.app.currentPage
    if (isBlank(typeOfList.name)) {
        
       model.input[currentPage].errorMessage= "Varen må ha et navn";
       updateView();
       resetErrorMessage(model.input[currentPage], "errorMessage");
        return;
    }
    if (isBlank(typeOfList.amount)) {
        typeOfList.amount = 1;
    }
    if (!parseInt(typeOfList.amount)) {
        
       model.input[currentPage].errorMessage= "Skriv inn et tall";
       updateView();
       resetErrorMessage(model.input[currentPage], "errorMessage");
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
    setTimeout(() => {
        const inputSection = document.querySelector('.show-input-button');
        if (inputSection) {
          inputSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, 50);
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
    if(model.app.previousPage.includes("groupsOverview") && model.data.groups.find(obj=> obj.adminUserId == model.app.currentUserId)){
        const group= model.data.groups.find(obj=>obj.groupId == model.app.currentGroupId)
        const listIndex = group.lists.findIndex(obj=> obj.listId == model.app.currentListPath.listId);
        group.log.unshift(model.app.currentListPath);
        group.lists.splice(listIndex,1);
        resetVariable(model.app, 'currentGroupId');
        setPage('dashboard');
        
    }else{
        const user = model.data.users.find(obj => obj.userId === model.app.currentUserId);
        const listIndex = user.lists.findIndex(obj => obj.listId === model.app.currentListPath.listId);
        //Update favorite item list
        if(model.app.currentPage== "shoppingList" && !model.app.previousPage.includes("groupsOverview")){
            addItemToFavoriteList();
        }
    
        user.log.unshift(model.app.currentListPath);
        //model.data.users[userIndex].log.unshift(model.app.currentListPath);
        user.lists.splice(listIndex, 1);
        orderFavoriteItemList();

        setPage('dashboard');
    }
}

function renderListItems() {
    let listItemsHtml = '';
    model.app.currentListPath.listItems.sort((a, b) => a.hasBeenBought - b.hasBeenBought)
    model.app.currentListPath.listItems.forEach(item => {
        listItemsHtml += /*HTML*/ ` 
            <div id="listItem${item.itemId}" class="${item.hasBeenBought ? 'list-bought' : 'list'}">
                <div class="list-item"> ${item.name}, </div>
                ${item.amount ? `<div class="list-amount"> Antall: ${item.amount} </div>` : ''}
                ${item.price ? `<div class="list-price">Pris: ${item.price} kr</div>` : ''}
                ${item.whoIsTheRecipient ? `<div class="list-recipient">Til: ${item.whoIsTheRecipient}</div>` : ''}
                ${model.app.currentListPath.isCompleted ? '' : `<input class="list-checkbox" onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />`}
                ${model.app.currentListPath.isCompleted ? '' : `<button class="list-button" onclick="removeItemFromList(${item.itemId}, ${item.listId})"> ❌</button>`}
                </div > 
                ${model.app.previousPage.includes('groupsOverview') ? `<h4>${model.data.users.find(obj => obj.userId == item.whoAddedItemId).username ?? ''}</h4>` : ''}
                `
    });
    return listItemsHtml;
}
