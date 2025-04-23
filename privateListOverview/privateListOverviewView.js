function privateListOverviewView() {

    let privateList = '<button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button> <button onclick="goToDashboardPage()">Dasboard</button>';
    model.data.users.find(obj => obj.userId == model.app.currentUserId).lists.forEach(list => {
        privateList += /*HTML*/`<div onclick="printPrivateList('${list.listType}',${list.listId})">
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

function printPrivateList(listType, listId) {
    const user = model.data.users.find(obj => obj.userId == model.app.currentUserId)
    user.recentList = {
        type: listType,
        id: listId
    };
    const list = user.lists.find(obj => obj.listId == listId)
    if (!list) {
        console.error("list not found");
        return;
    }
    if (listType == 'shoppingList') {

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