function shoppingListView() {
    model.app.currentPage = 'shoppingList'
    let html =/*HTML*/ `
    <div>Handleliste mat</div>
    <input 
    type='text'
    value = "";
    oninput="";
    `
    return html;
};