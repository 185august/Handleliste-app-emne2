let showAddNewItemInput = false;

function shoppingListView() {
    let html =/*HTML*/ `
    <button class ="previousPageButton"onclick="goToPreviousPage(-1)"></button><button class ="home" onclick="goToDashboardPage()"></button>
    ${model.app.previousPage.includes('groupsOverview') ? `` : `<button onclick="pushListToLog()">Legg liste til i log</button>`}
    <div class="container">
    <h1>${model.app.currentListPath.listName}</h1>
    <br>
    ${renderListItems()}
    </div>
    <div class="show-input-button"><button  onclick="toggleInput()"> ${showAddNewItemInput ? '-' : '+'} </button> ${renderAddItemsToList()}</div>
    ${model.app.previousPage.includes('groupsOverview') ? '' : renderFavoriteItemsToShoppingList()}
    `
    return html;
};



function renderAddItemsToList() {
    if (showAddNewItemInput) return `
    Vare: 
    <input 
    type='text'
    value="${model.input.shoppingList.name ?? ''}"
    oninput="model.input.shoppingList.name = this.value">
    Antall: 
    <input 
    type='number'
    value = "${model.input.shoppingList.amount ?? ''}"
    oninput="model.input.shoppingList.amount = this.value">
    <button onclick="addItemToList(model.input.shoppingList)">Legg til vare</button>
    `
    else return ``
}