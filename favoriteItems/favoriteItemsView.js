function favoriteItemsView() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html =/*HTML*/ ` 
    <button onclick="goToPreviousPage(-1)"> <- </button>
    <div class="container">
    <h1 style=" background-color: lightblue">Favoritt Varer</h1>
    <br>
    ${renderFavoriteItems()}
`
    return html;
}

function renderFavoriteItems() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html = '';
    currentUser.favoriteItemsList.favoriteItems.forEach(element => {
        html += `
        <div> ${element.rank}: ${element.name},    Antall kjøpt siste uke:  ${element.amountRecentlyBought}</div> 
        `

    });
    return html;
}