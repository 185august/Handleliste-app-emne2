let showInput = false;

function shoppingListView() {
    let html =/*HTML*/ `
    <button onclick="goToPreviousPage(-1)"> <- </button><button onclick="goToDashboardPage()">Dasboard</button>
    <div class="container">
    <h1>${model.app.currentListPath.listName}</h1>
    
    <br>
    
    ${renderListItems()}
   
    </div>
    <div><button onclick="toggleInput()"> ${showInput ? '-' : '+'} </button> ${renderAddItemsToList()}</div>
    ${favoriteItemsView()}
    `
    return html;
};

function toggleInput() {
    showInput = !showInput;
    updateView();
}

function renderAddItemsToList() {
    if (showInput) return `
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