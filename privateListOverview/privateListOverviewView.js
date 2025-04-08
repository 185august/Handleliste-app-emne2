function privateListOverviewView() {
    for (let i = model.data.users[model.app.currentUserId].lists.length - 1; i >= 0; i--) {
        model.data.users[model.app.currentUserId].lists[i].listId = i;
    }
    let privateList = '<button onclick="goToPreviousPage(-1)"> <- </button> <button onclick="goToDashboardPage()">Dasboard</button>';
    model.data.users[model.app.currentUserId].lists.forEach(List => {
        privateList += /*HTML*/`<div onclick="printPrivateList(${List.listId})">
    <p>
    <h1>${List.listName}</h1>
    </p>
    </div>
    `
    });
    privateList += `${createNewlistView()}`
    return privateList;
}
function printPrivateList(id) {

    const list = model.data.users[model.app.currentUserId].lists.find((element) => element.listId == id)
    if (list.listType == 'shoppingList') {
        model.app.currentListPath = model.data.users[model.app.currentUserId].lists[id]
        setPage('shoppingList');
    } else {
        model.app.currentListPath = model.data.users[model.app.currentUserId].lists[id]
        setPage('wishlist');
    }
};
function createPrivateList() {

};


// list.listItems.forEach(element=>{
//     html+= `<li>${element.name} ${element.amount}</li>`
// })