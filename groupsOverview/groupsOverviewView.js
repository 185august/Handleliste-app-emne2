function groupsOverviewView() {

    let html = '<button onclick="goToPreviousPage(-1)"> <- </button> <button onclick="goToDashboardPage()">Dasboard</button>'

    model.data.users[model.app.currentUserId].groupsId.forEach(id => {

        const group = model.data.groups.find(groupElement => groupElement.groupId === id)
        html += /*HTML*/
            `
        <div ${group.showLists ? '' : `onclick="printGroupList(${group.groupId})"`}>
            <h1 ${group.showLists ? `onclick="toggleGroupLists(${group.groupId})"` : ''}>${group.name}</h1>
            ${group.showLists ? `<div id ="namelists${id}">${groupListView() ?? ''}</div>` : ''}
        </div>`
    });
    return html
}

/* function printGroupList(groupId) {
    let html = ''
    model.data.groups.forEach(element => {
        document.querySelector(`#namelists${element.groupId}`).innerHTML = '';
    });
    model.app.currentGroupId = parseInt(groupId)
    const object = model.data.groups.find(groupElement => groupElement.groupId == groupId)
    object.lists.forEach(element => {

        html += `
            <p onclick="toTheListPage('${element.listType}',${element.listId}, ${groupId})">${element.listName}</p>
            `
    })
    html += `${model.input.createNewList.showInput && model.data.groups[model.app.currentGroupId] == model.app.currentGroupId ? '' : `<button onclick="toggleAddNewListInput()"> Ny liste </button>`}
    ${createNewListView()}`
    document.querySelector(`#namelists${groupId}`).innerHTML = html
}; */

function printGroupList(groupId) {
    model.app.currentGroupId = model.data.groups.findIndex(obj => obj.groupId === groupId)
    if (model.app.currentGroupId === null || model.app.currentGroupId <= -1) return '';
    groupListView();
    updateView();
};
function groupListView() {
    if (model.app.currentGroupId == null || model.app.currentGroupId <= -1) return ''
    let html = '';
    model.data.groups.forEach(element => {
        element.showLists = false;
    });
    model.data.groups[model.app.currentGroupId].showLists = true;
    model.data.groups[model.app.currentGroupId].lists.forEach(element => {

        html += /*HTML*/`
            <p onclick="toTheListPage('${element.listType}',${element.listId}, ${model.app.currentGroupId})">${element.listName}</p>
            `
    })
    html += `${model.input.createNewList.showInput && model.data.groups[model.app.currentGroupId] == model.app.currentGroupId ? '' : `<button onclick="toggleAddNewListInput()"> Ny liste </button>`}
    ${createNewListView()}`
    return html
}

function toTheListPage(element, listId, groupId) {
    const listIndex = model.data.groups[model.app.currentGroupId].lists.findIndex(obj => obj.listId === listId)
    if (element == 'shoppingList') {
        model.app.currentListPath = model.data.groups[groupId].lists[listIndex]
        setPage('shoppingList');
    } else {
        model.app.currentListPath = model.data.groups[groupId].lists[listIndex]
        setPage('wishlist');
    }
}
