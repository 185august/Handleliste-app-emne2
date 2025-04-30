let showAddNewItemInput = false;

function shoppingListView() {
    let html =/*HTML*/ `
    <button class ="previousPageButton"onclick="goToPreviousPage(-1)"></button>
    ${model.app.previousPage.includes("privateListOverview")? `<button onclick="setPage('shareList')">Del listen</button>`: ''}
    ${model.app.previousPage.includes("privateListOverview") || model.data.groups.find(obj=> obj.adminUserId == model.app.currentUserId) ? `<button class="btn-push-to-log" onclick="pushListToLog()">Legg liste til i log</button>`:''}
    <div class="shopping-list-wrapper">
    <div class="container-items">
    <h3 class="list-title">${model.app.currentListPath.listName}</h3>
    ${renderListItems()}
    <div class="show-input-button"><button class="shoppinglistPlus" onclick="toggleInput()"> ${showAddNewItemInput ? '-' : '+'} </button> ${renderAddItemsToList()}</div>
    </div>
    </div>
    ${model.app.previousPage.includes('groupsOverview') ? '' : renderFavoriteItemsToShoppingList()}
    `
    return html+= '<button class ="home" onclick="goToDashboardPage()"></button>';
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