function groupsOverviewView() {

    let html =/*HTML*/ `<div class="headerbox">
      <button class ="previousPageButton" onclick="goToPreviousPage(-1)"></button>
      <button class = "groupsettingButton" style = "padding:0; font-size: 1.6rem; text-align: center;padding-block:0" 
      onclick="groupSettingsView(); setPage('settings')">⚙️</button>
     </div>
    <button class ="home" onclick="goToDashboardPage()"></button>
   `

    model.data.users.find(obj => obj.userId == model.app.currentUserId).groupsId.forEach(id => {

        const group = model.data.groups.find(groupElement => groupElement.groupId === id)
        html += /*HTML*/
            `
            <div>
        <div class="listeBoks" ${group.showLists ? '' : `onclick="printGroupList(${group.groupId})"`}>
            <h2 ${group.showLists ? `onclick="toggleGroupLists(${group.groupId})"` : ''}> ${group.name}</h2>
            ${group.showLists ? `<div id ="namelists${id}">${groupListView() ?? ''}</div>` : ''}
        </div>
            <div>`
    });
    html += `<button class = "plus" onclick="setPage('createNewGroup')">✚</button>`
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
    model.app.currentGroupId = groupId
    groupListView();
    updateView();
};

function groupListView() {
    if (model.app.currentGroupId === null || model.app.currentGroupId <= -1) return '';
    let html = '';

    model.data.groups.forEach(element => {
        element.showLists = false;
    });

    const groupPath = model.data.groups.find(obj => obj.groupId === model.app.currentGroupId)

    groupPath.showLists = true;
    groupPath.lists.forEach(element => {

        html += /*HTML*/`
            <p onclick="toTheListPage('${element.listType}',${element.listId}, ${model.app.currentGroupId})">${element.listName}</p>
            <button class="listeKnapper" onclick="removeList(${element.listId}, ${model.app.currentGroupId})">❌</button>
        `
    })
    html += ` ${model.input.createNewList.showInput && model.data.groups[model.app.currentGroupId] == model.app.currentGroupId ? '' : `<button onclick="toggleAddNewListInput()"> Ny liste </button>`}
    ${createNewListView()}`
    return html
}

function toTheListPage(listType, listId, groupId) {
    const path = model.data.groups.find(obj => obj.groupId == groupId).lists.find(obj => obj.listId === listId)
    if (listType == 'shoppingList') {
        model.app.currentListPath = path;
        //model.data.users.find(obj => obj.userId === model.app.currentUserId);
        setPage('shoppingList');
    } else {
        model.app.currentListPath = path;
        setPage('wishlist');
    }
}
