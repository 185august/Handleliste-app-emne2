function renderLogItems(listId) {
    let listItemsHtml = '';
    const itemIndex = model.data.users.find(obj => obj.userId == model.app.currentUserId).log.find
        (obj => obj.listId === listId).listItems.forEach(item => {
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
    const user = model.data.users.find(obj => obj.userId == model.app.currentUserId);
    const logIndex = user.log.findIndex(obj => obj.listId == logId);
    user.log.splice(logIndex, 1)
    updateView();
}