function favoriteItemsView() {
    let html =/*HTML*/ ` 
    <div class="container">
    <h4>Favoritt Varer</h4>
    </div>
`
    return html;
}

function renderFavoriteItemsToShoppingList() {
    const currentUser = model.data.users.find(obj => obj.userId == model.app.currentUserId);
    let html = `
    <div class="container">
    <h4>Favoritt Varer</h4>
    <br>
    `
    let currentIndex = 0;
    currentUser.favoriteItemsList.favoriteItems.forEach(element => {
        if (model.app.currentPage == "shoppingList" || model.app.currentPage == "wishlist") {
            if (currentIndex == 5) return;
        }
        html += /*HTML*/`
        <div class="favorite-items"> 
            <div onclick="addItemFromFavoritesToShoppingList('${element.name}')">${element.rank}: ${element.name}</div>
        </div> 
        `
        currentIndex++
    });
    return html += `</div>`;
}