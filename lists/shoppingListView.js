function shoppingListView(listpath) {
    const currentUser = model.data.users[model.app.currentUserId]
    let html =/*HTML*/ `
    <button onclick="goToPreviousPage(-1)"> <- </button>
    <div class="container">
    <h1 style=" background-color: lightblue">${listpath.listName}</h1>
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
    
    ${renderListItems(listpath)}
    </div>
`
    return html;
};
