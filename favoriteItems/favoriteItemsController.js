
function addItemFromFavoritesToShoppingList(element) {
    model.app.currentListPath.listItems.push({
        itemId: createNewId(model.app.currentListPath.listItems, 'itemId'),
        name: element,
        amount: 1,
        price: '',
        hasBeenBought: false,
        whoIsRecipient: '',
    })
    updateView();
}

function orderFavoriteItemList() {
    const favList = model.data.users.find(obj => obj.userId == model.app.currentUserId).favoriteItemsList.favoriteItems
    favList.sort((a, b) => b.amountRecentlyBought - a.amountRecentlyBought)
    for (let i = 0; i < favList.length; i++) {
        favList[i].rank = (i + 1);
    }
}

function addItemToFavoriteList() {
    const user = model.data.users.find(obj => obj.userId === model.app.currentUserId);
    const favoriteList = user.favoriteItemsList.favoriteItems;
    const currentList = model.app.currentListPath.listItems
    for (let i = 0; i < currentList.length; i++) {
        let foundAnItem = 0;
        for (let j = 0; j < favoriteList.length; j++) {
            if (currentList[i].name.toLowerCase().includes(favoriteList[j].name.toLowerCase())) {
                console.log(currentList[i].name + "   " + favoriteList[j].name)
                console.log(currentList[i].name + "went from " + favoriteList[j].amountRecentlyBought)
                favoriteList[j].amountRecentlyBought++;
                console.log("to " + favoriteList[j].amountRecentlyBought)
                foundAnItem++;
            }
        }
        if (foundAnItem === 0) {
            favoriteList[favoriteList.length] = {
                itemId: currentList[i].itemId,
                name: currentList[i].name,
                price: null,
                whoIsTheRecipient: null,
                amountRecentlyBought: 1,
                rank: (favoriteList.length + 1)
            }
        }

    }
}