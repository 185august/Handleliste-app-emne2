function favoriteItemsView() {
    let favoriteItemsHtml = ` 
    <button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button><button class ="home" onclick="goToDashboardPage()"></button>
    <div class="container">
    <h4>Favoritt Varer</h4>`
    model.data.users.find(obj => obj.userId == model.app.currentUserId).favoriteItemsList.favoriteItems.forEach(item => {
        favoriteItemsHtml += `<div>${item.rank}: ${item.name}, Ganger handlet:${item.amountRecentlyBought}</div>
         <button class="erase" onclick="removeItemFromFavorites(${item.itemId})">❌</button>`
    });
    return favoriteItemsHtml += `</div>`;
}

function renderFavoriteItemsToShoppingList() {
    const currentUser = model.data.users.find(obj => obj.userId == model.app.currentUserId);
    let html = `
    <div class="container">
    <h4 onclick="setPage('favoriteItems')">Favoritt Varer</h4>
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