showInput = false;

function wishlistView() {
    console.log()
    let html =/*HTML*/ `
    <button onclick="goToPreviousPage(-1)"> <- </button><button onclick="goToDashboardPage()">Dasboard</button>
    <div class="container">
    <h1>${model.app.currentListPath.listName}</h1>
    ${renderListItems()}
    </div>
    <div class="show-input-button"><button onclick="toggleInput()"> ${showInput ? '-' : '+'} </button> ${renderAddItemsToWishlist()}</div>
`
    return html;
};


function renderAddItemsToWishlist() {
    if (showInput) return `
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

