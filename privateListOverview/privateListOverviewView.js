function privateListOverviewView() {

    let privateList = '<div class="headerbox"><button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button> <button class ="home" onclick="goToDashboardPage()"></button></div>';
    model.data.users.find(obj => obj.userId == model.app.currentUserId).lists.forEach(list => {
        privateList += /*HTML*/`<div style="text-align:center" onclick="printPrivateList('${list.listType}',${list.listId})">
    <p>
    <h2 class="listeBoks">${list.listName}</h2>
    </p>
    </div>
    `
    });
    privateList += `${model.input.createNewList.showInput ? '' : `<div class="divforstyle"><div class="listeBoks"><button onclick="toggleAddNewListInput()" class="plus">✚</button></div></div>`}
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