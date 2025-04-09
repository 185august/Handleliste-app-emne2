function privateListOverviewView() {

    let privateList = '<button onclick="goToPreviousPage(-1)"> <- </button> <button onclick="goToDashboardPage()">Dasboard</button>';
    model.data.users[model.app.currentUserId].lists.forEach(list => {
        privateList += /*HTML*/`<div onclick="printPrivateList(${list.listId})">
    <p>
    <h1>${list.listName}</h1>
    </p>
    </div>
    `
    });
    privateList += `${model.input.createNewList.showInput ? '' : `<button onclick="toggleAddNewListInput()"> Ny liste </button>`}
    ${createNewListView()}`
    return privateList;
}
function printPrivateList(id) {
    const listIndex = model.data.users[model.app.currentUserId].lists.findIndex(obj => obj.listId === id)
    const list = model.data.users[model.app.currentUserId].lists[listIndex]
    if (list.listType == 'shoppingList') {
        model.app.currentListPath = list
        setPage('shoppingList');
    } else {
        model.app.currentListPath = list
        setPage('wishlist');
    }
};



// list.listItems.forEach(element=>{
//     html+= `<li>${element.name} ${element.amount}</li>`
// })