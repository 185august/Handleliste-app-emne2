function privateListOverviewView() {
    let privateList = '';
    model.data.users[model.app.currentUserId].lists.forEach(List => {
        privateList += /*HTML*/`<div onclick="printPrivateList(${List.listId})">
    <p>
    <h1>${List.listName}</h1>
    </p>
    </div>`
    });
    return privateList;
}
function printPrivateList(id) {
    const list = model.data.users[model.app.currentUserId].lists.find((element) => element.listId == id)
    if (list.listType == 'shoppingList') {
        model.data.users[model.app.currentUserId].currentSelectedListId = id;
        setPage('shoppingList');
    } else {
        model.data.users[model.app.currentUserId].currentSelectedListId = id;
        setPage('wishlist');
    }
};


// list.listItems.forEach(element=>{
//     html+= `<li>${element.name} ${element.amount}</li>`
// })