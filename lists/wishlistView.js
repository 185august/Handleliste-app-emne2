function wishlistView() {
    model.data.users[model.app.currentUserId].currentSelectedListId = 1;
    let html =/*HTML*/ `
    <div class="container">
    <h1 style=" background-color: lightblue">${model.data.users[model.app.currentUserId].lists[1].listName}</h1>
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
    value="${model.input.wishlist.whoIsTheRecipient ?? ''}"
    oninput="model.input.wishlist.whoIsTheRecipient = this.value">
    <button onclick="addItemToList(model.input.wishlist)">Legg til vare</button>
    <br>
    
    ${renderListItems()}
    </div>
`
    return html;
};


function renderListItems() {
    const currentUser = model.data.users[model.app.currentUserId]
    let listItemsHtml = '';
    currentUser.lists[currentUser.currentSelectedListId].listItems.forEach(item => {
        listItemsHtml += '<div class="wishlist">'
        listItemsHtml += `<div class="wishlist-items">Vare: ${item.name}</div>`;
        listItemsHtml += `<div class="wishlist-amount">Antall: ${item.amount}</div> `;
        listItemsHtml += item.price ? `<div class="wishlist-price">Pris: ${item.price}</div>` : ''
        listItemsHtml += item.whoIsTheRecipient ? `<div class="wishlist-price">Hvem gaven er til: ${item.whoIsTheRecipient}</div>` : ""
        listItemsHtml += `<button onclick="removeItemFromList(${item.itemId}, ${item.listId})"> X</button>`
        listItemsHtml += `<input onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />`
        listItemsHtml += `</div>`
    });
    return listItemsHtml;
}