function privateListOverviewView() {
    let privateList = '<button onclick="goToPreviousPage(-1)"> <- </button>';
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
        model.app.currentListPath = model.data.users[model.app.currentUserId].lists[id]
        //model.data.users[model.app.currentUserId].currentSelectedListId = id;
        setPage('shoppingList', /* model.data.users[model.app.currentUserId].lists[id] */);
    } else {
        //model.data.users[model.app.currentUserId].currentSelectedListId = id;
        model.app.currentListPath = model.data.users[model.app.currentUserId].lists[id]
        setPage('wishlist', /* model.data.users[model.app.currentUserId].lists[id] */);
    }
};


// list.listItems.forEach(element=>{
//     html+= `<li>${element.name} ${element.amount}</li>`
// })