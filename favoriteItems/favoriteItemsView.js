function favoriteItemsView() {
    let favoriteItemsHtml = ` 
    <button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button><button class ="home" onclick="goToDashboardPage()"></button>
    <div class="container-overview">
    <h3 class="divforstyle">Favoritt Varer</h3>`
    model.data.users.find(obj => obj.userId == model.app.currentUserId).favoriteItemsList.favoriteItems.forEach(item => {
        favoriteItemsHtml += `
        <div class="divforstyle">
            <div class="listeBoks">${item.rank}: ${item.name}, Ganger handlet:${item.amountRecentlyBought}
            <button class="listeKnapper erase" onclick="removeItemFromFavorites(${item.itemId})">❌</button>
            </div>
        </div>
        `
    });
    return favoriteItemsHtml += `</div>`;
}

function renderFavoriteItemsToShoppingList() {
    const currentUser = model.data.users.find(obj => obj.userId == model.app.currentUserId);
    let html = `
    <div class="favorite-items">
    <h4 onclick="setPage('favoriteItems')">Favoritt Varer</h4>
    `
    let currentIndex = 0;
    currentUser.favoriteItemsList.favoriteItems.forEach(element => {
        if (model.app.currentPage == "shoppingList" || model.app.currentPage == "wishlist") {
            if (currentIndex == 5) return;
        }
        html += /*HTML*/`
        <div class="favorite-items"> 
            <div class="item-favorite" onclick="addItemFromFavoritesToShoppingList('${element.name}')">${element.rank}. ${element.name}</div>
        </div> 
        `
        currentIndex++
    });
    return html += `</div>`;
}