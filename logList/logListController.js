function showLogItems(listId) {
    const object = model.app.currentPage=="groupLogList"? model.data.groups.find(obj=>obj.groupId == model.app.currentGroupId) : model.data.users.find(obj=>obj.userId == model.app.currentUserId)
    object.log.forEach(list => {
        if (list.showLog == true) {
            list.showLog = false;
        }
    });

    const currentLog = object.log.find(obj => obj.listId === listId)
    currentLog.showLog = true;
    updateView();
}

function renderLogItems(listId) {
    let listItemsHtml = '';
    const object = model.app.currentPage=="groupLogList"? model.data.groups.find(obj=>obj.groupId == model.app.currentGroupId) : model.data.users.find(obj=>obj.userId == model.app.currentUserId)
    object.log.find(obj => obj.listId == listId).listItems.forEach(item => {
        listItemsHtml += /*HTML*/ ` 
            <div id="listItem${item.itemId}" class="${item.hasBeenBought ? 'list-bought' : 'list'}">
                <div class="list-item">Vare: ${item.name} </div>
                ${item.amount ? `<div class="list-amount">Antall: ${item.amount} </div>` : ''}
                ${item.price ? `<div class="list-price">Pris: ${item.price} kr</div>` : ''}
                ${item.whoIsTheRecipient ? `<div class="list-recipient">Til: ${item.whoIsTheRecipient}</div>` : ''}
                </div > 
                `
    });
    return listItemsHtml;
}

function deleteListFromLog(logId) {
    const object = model.app.currentPage=="groupLogList"? model.data.groups.find(obj=>obj.groupId == model.app.currentGroupId) : model.data.users.find(obj=>obj.userId == model.app.currentUserId)
    const logIndex = object.log.findIndex(obj => obj.listId == logId);
    object.log.splice(logIndex, 1)
    updateView();
}

function activateList(listId) {
    const object = model.app.currentPage=="groupLogList"? model.data.groups.find(obj=>obj.groupId == model.app.currentGroupId) : model.data.users.find(obj=>obj.userId == model.app.currentUserId)
    const currentList = object.log.find(obj => obj.listId == listId)
    currentList.isCompleted = false;
    currentList.listId = createNewId(object.lists, "listId")
    object.lists.push(currentList)
    object.log.splice(object.log.findIndex(obj => obj.listId == listId), 1)
    updateView();
}