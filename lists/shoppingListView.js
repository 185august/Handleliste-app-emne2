function shoppingListView() {
    let html =/*HTML*/ `
    <div>${model.data.users[model.app.currentUserId].lists[0].listName}</div>
    Vare: 
    <input 
    type='text'
    value="${model.input.shoppingList.addItem ?? ''}"
    oninput="model.input.shoppingList.addItem = this.value">
    Antall: 
    <input 
    type='number'
    value = "${model.input.shoppingList.amount ?? ''}"
    oninput="model.input.shoppingList.amount = this.value">
    <button onclick="addItemToShoppingList()">Legg til vare</button>
    <br>
    <div class="shopping-list-container">
    ${renderListItems()}
    </div>
`
    return html;
};


function renderListItems() {
    let listItemsHtml = '';
    model.data.users[model.app.currentUserId].lists[0].listItems.forEach(item => {
        listItemsHtml += `` + `<div class="shopping-list-items">${item.name}</div>`
            + `<div class="shopping-list-amount">${item.amount}</div> `
            + `<button onclick="removeItemFromShoppingList(${item.itemId}, ${item.listId})"> X</button>`
            + `<input onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />`
    });
    return listItemsHtml;
}