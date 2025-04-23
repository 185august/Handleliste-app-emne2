function favoriteItemsView() {
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
    const currentUser = model.data.users.find(obj => obj.userId == model.app.currentUserId);
    let html = '';
    let currentIndex = 0;
    currentUser.favoriteItemsList.favoriteItems.forEach(element => {
        if (model.app.currentPage == "shoppingList" || model.app.currentPage == "wishlist") {
            if (currentIndex == 5) return;
        }
        html += /*HTML*/`
        <div class="favorite-container"> 
            <div onclick="addItemFromFavoritesToShoppingList('${element.name}')">${element.rank}: ${element.name}</div>
            <div>Antall kjøpt siste uke:  ${element.amountRecentlyBought}</div>
        </div> 
        `
        currentIndex++
    });
    return html;
}