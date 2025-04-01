function shoppingListView() {
    let html =/*HTML*/ `
    <button onclick="goToPreviousPage()"> <- </button>
    <div class="container">
    <h1 style=" background-color: lightblue">${model.data.users[model.app.currentUserId].lists[0].listName}</h1>
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
    <br>
    
    ${renderListItems()}
    </div>
`
    return html;
};
