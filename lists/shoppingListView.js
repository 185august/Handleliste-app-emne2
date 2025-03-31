function shoppingListView() {
    let html =/*HTML*/ `
    <div class="container">
    <h1 style=" background-color: lightblue">${model.data.users[model.app.currentUserId].lists[0].listName}</h1>
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
    
    ${renderListItems()}
    </div>
`
    return html;
};


function renderListItems() {
    const currentUser = model.data.users[model.app.currentUserId]
    let listItemsHtml = '';
    currentUser.lists[currentUser.currentSelectedListId].listItems.forEach(item => {
        listItemsHtml += '<div class="shopping-list">'
        listItemsHtml += `<div class="shopping-list-items">${item.name}</div>`;
        listItemsHtml += `<div class="shopping-list-amount">${item.amount}</div> `;
        listItemsHtml += `<button onclick="removeItemFromShoppingList(${item.itemId}, ${item.listId})"> X</button>`
        listItemsHtml += `<input onchange="markItemAsBought(this, ${item.itemId})" type="checkbox" ${item.hasBeenBought ? 'checked="checked"' : ''} />`
        listItemsHtml += `</div>`
    });
    return listItemsHtml;
}