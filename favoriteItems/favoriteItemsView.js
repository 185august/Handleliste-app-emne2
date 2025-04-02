function favoriteItemsView() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html =/*HTML*/ ` 
    <div class="container">
    <h4>Favoritt Varer</h4>
    <br>
    ${renderFavoriteItems()}
    </div>
`
    return html;
}

function renderFavoriteItems() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html = '';
    currentUser.favoriteItemsList.favoriteItems.forEach(element => {
        html += /*HTML*/`
        <div class="favorite-container"> 
            <div onclick="addItemFromFavoritesToShoppingList('${element.name}')">${element.rank}: ${element.name}</div>
            <div>Antall kjøpt siste uke:  ${element.amountRecentlyBought}</div>
        </div> 
        `

    });
    return html;
}