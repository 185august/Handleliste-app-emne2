function renderLogItems(listId) {
    let listItemsHtml = '';
    const itemIndex = model.data.users[model.app.currentUserId].log.findIndex(obj => obj.listId === listId)
    model.data.users[model.app.currentUserId].log[itemIndex].listItems.forEach(item => {
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
    const userLog = model.data.users[model.app.currentUserId].log
    const logIndex = userLog.findIndex(obj => obj.listId === logId)
    userLog.splice(logIndex, 1)
    updateView();
}