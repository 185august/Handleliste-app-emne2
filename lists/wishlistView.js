function wishlistView() {
    const currentUser = model.data.users[model.app.currentUserId]
    let html =/*HTML*/ `
    <button onclick="goToPreviousPage()"> <- </button>
    <div class="container">
    <h1 style=" background-color: lightblue">${currentUser.lists[currentUser.currentSelectedListId].listName}</h1>
    Vare: 
    <input 
    type='text'
    value="${model.input.wishlist.name ?? ''}"
    oninput="model.input.wishlist.name = this.value">
    Antall: 
    <input 
    type='number'
    value = "${model.input.wishlist.amount ?? ''}"
    oninput="model.input.wishlist.amount = this.value">
    Pris:
    <input 
    type='text'
    value="${model.input.wishlist.price ?? ''}"
    oninput="model.input.wishlist.price = this.value">
    Hvem er gaven til?
    <input 
    type='text'
    value="${model.input.whoIsTheRecipient ?? ''}"
    oninput="model.input.wishlist.whoIsTheRecipient = this.value">
    <button onclick="addItemToList(model.input.wishlist)">Legg til vare</button>
    <br>
    
    ${renderListItems(currentUser.lists[currentUser.currentSelectedListId])}
    </div>
`
    return html;
};


function renderListItems(whatList) {
    let listItemsHtml = '';
    whatList.listItems.forEach(item => {
        listItemsHtml += /*HTML*/ ` 
            <div id="listItem${item.itemId}" class="wishlist">
                <div class="wishlist-items">Vare: ${item.name}</div>
                <div class="wishlist-amount">Antall: ${item.amount}</div>
                ${item.price ? `<div class="wishlist-price">Pris: ${item.price}</div>` : ''}
                ${item.whoIsTheRecipient ? `<div class="wishlist-price">Hvem gaven er til: ${item.whoIsTheRecipient}</div>` : ""}
                <button onclick="removeItemFromList(${item.itemId}, ${item.listId})"> X</button>
                <input onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />
            </div>`
    });
    return listItemsHtml;
}