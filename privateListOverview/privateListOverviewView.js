function privateListOverviewView() {

    let privateList = '<div class="headerbox"><button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button> <button class ="home" onclick="goToDashboardPage()"></button> <button onclick="toggleAddNewListInput()" class="plus">✚</button></div>';
    privateList+= '<div class="container-overview"><h1 class="divforstyle">Private Lister</h1>'
    model.data.users.find(obj => obj.userId == model.app.currentUserId).lists.forEach(list => {
        privateList += /*HTML*/`<div class="divforstyle" onclick="printPrivateList('${list.listType}',${list.listId})">
    <p>
    <h3 class="listeBoks">${list.listName}<button class="listeKnapper erase" style="font-size: 1rem;" onclick="removeList(${list.listId},'')">❌</button></h3>
    </p>
    </div>
    `
    });
    privateList += `${model.input.createNewList.showInput ? '' : `<div class="divforstyle"></div>`}
    ${createNewListView()}`
    return privateList+='</div>';
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