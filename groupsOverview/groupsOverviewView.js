function groupsOverviewView() {
    let html = '<button onclick="goToPreviousPage(-1)"> <- </button> <button onclick="goToDashboardPage()">Dasboard</button>'
    let groupList = model.data.users[model.app.currentUserId].groupsId //group id array 

    groupList.forEach(id => {

        const object = model.data.groups.find(groupElement => groupElement.groupId === id)
        html += /*HTML*/
            `<div onclick="printGrouplist('${object.groupId}')">
        <h1>${object.name}</h1>
        <div id ="namelists${id}"></div>
        </div>`
    });
    return html
}


function printGrouplist(groupId) {
    let html = ''
    model.data.groups.forEach(element => {
            document.querySelector(`#namelists${element.groupId}`).innerHTML = '';
    });
    model.app.currentGroupId = parseInt(groupId)
    const object = model.data.groups.find(groupElement => groupElement.groupId == groupId)
    object.lists.forEach(element => {
        
        html += /*HTML*/`
            <p onclick="toTheListPage('${element.listType}',${element.listId}, ${groupId})">${element.listName}</p>
            `
    })
   html+= `${model.input.createNewList.showInput && model.data.groups[model.app.currentGroupId] == model.app.currentGroupId ?'':`<button onclick="toggleAddNewListInput()"> Ny liste </button>`}
    ${createNewListView()}`
    document.querySelector(`#namelists${groupId}`).innerHTML = html
};

function toTheListPage(element, listId, groupId) {
    if (element == 'shoppingList') {
        model.app.currentListPath = model.data.groups[groupId].lists[listId]
        setPage('shoppingList');
    } else {
        model.app.currentListPath = model.data.groups[groupId].lists[listId]
        setPage('wishlist');
    }
}
