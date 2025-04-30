showAddNewItemInput = false;

function wishlistView() {
    console.log()
    let html =/*HTML*/ `
    <button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button><button class ="home" onclick="goToDashboardPage()"></button>
    ${model.app.previousPage.includes("privateListOverview")? `<button onclick="setPage('shareList')">Del listen</button>`: ''}
    ${model.app.previousPage.includes("privateListOverview") || model.data.groups.find(obj=> obj.adminUserId == model.app.currentUserId) ? `<button class="btn-push-to-log" onclick="pushListToLog()">Legg liste til i log</button>` : ''}
    <div class="shopping-list-wrapper">
    <div class="container-wishlist">
    <h1>${model.app.currentListPath.listName}</h1>
    ${renderListItems()}
    <div class="show-input-button"><button class="wishlistPlus" onclick="toggleInput()"> ${showAddNewItemInput ? '-' : '+'} </button> ${renderAddItemsToWishlist()}</div>
    </div>
`
    return html;
};


function renderAddItemsToWishlist() {
    if (showAddNewItemInput) return `
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
    type='number'
    value="${model.input.wishlist.price ?? ''}"
    oninput="model.input.wishlist.price = this.value">
    Hvem er gaven til?
    <input 
    type='text'
    value="${model.input.wishlist.whoIsTheRecipient ?? ''}"
    oninput="model.input.wishlist.whoIsTheRecipient = this.value">
    <button onclick="addItemToList(model.input.wishlist)">Legg til vare</button>`
    else return ``
}

