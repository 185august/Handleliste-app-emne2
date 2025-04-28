function showLogItems(listId) {
    const userLogs = model.data.users.find(obj => obj.userId == model.app.currentUserId).log
    userLogs.forEach(list => {
        if (list.showLog == true) {
            list.showLog = false;
        }
    });

    const currentLog = userLogs.find(obj => obj.listId === listId)
    currentLog.showLog = true;
    updateView();
}

function renderLogItems(listId) {
    let listItemsHtml = '';
    model.data.users.find(obj => obj.userId == model.app.currentUserId).log.find(obj => obj.listId == listId).listItems.forEach(item => {
        listItemsHtml += /*HTML*/ ` 
            <div id="listItem${item.itemId}" class="${item.hasBeenBought ? 'list-bought' : 'list'}">
                <div class="list-item">Vare: ${item.name} </div>
                ${item.amount ? `<div class="list-amount">Antall: ${item.amount} </div>` : ''}
                ${item.price ? `<div class="list-price">Pris: ${item.price} kr</div>` : ''}
                ${item.whoIsTheRecipient ? `<div class="list-recipient">Til: ${item.whoIsTheRecipient}</div>` : ''}
                </div > 
                `
    });
    console.log(listItemsHtml)
    return listItemsHtml;
}

function deleteListFromLog(logId) {
    const user = model.data.users.find(obj => obj.userId == model.app.currentUserId);
    const logIndex = user.log.findIndex(obj => obj.listId == logId);
    user.log.splice(logIndex, 1)
    updateView();
}

function activateList(listId) {
    const user = model.data.users.find(obj => obj.userId == model.app.currentUserId)
    const currentList = user.log.find(obj => obj.listId == listId)
    currentList.isCompleted = false;
    currentList.listId = createNewId(user.lists, "listId")
    user.lists.push(currentList)
    user.log.splice(user.log.findIndex(obj => obj.listId == listId), 1)
    updateView();
}