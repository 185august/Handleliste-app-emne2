function groupsOverviewView() {

    let html =/*HTML*/ `
    <div class="headerbox">
    <button class ="previousPageButton" onclick="goToPreviousPage(-1), resetVariable(model.app, 'currentGroupId')"></button>
    <div style="justify-content: flex-end;">
    <button class = "plus" onclick="setPage('createNewGroup')">✚</button>
      <button class = "groupsettingButton" style = "padding:0; font-size: 1.6rem; text-align: center;padding-block:0;" 
      onclick="groupSettingsView(), setPage('settings'), resetVariable(model.app, 'currentGroupId')">⚙️</button>
    </div> 
    </div>
    <button class ="home" onclick="goToDashboardPage(), resetVariable(model.app, 'currentGroupId')"></button>
   `
    html+= '<div class="container-overview">'
    model.data.users.find(obj => obj.userId == model.app.currentUserId).groupsId.forEach(id => {

        const group = model.data.groups.find(groupElement => groupElement.groupId === id)
        html += /*HTML*/
            `
            <div class="divforstyle">
                <div class="listeBoks" ${group.showLists ? '' : `onclick="printGroupList(${group.groupId})"`}>
                    <h2 id="toggle-new-group-list" style="margin: 0 0 3% 0" ${group.showLists ? `onclick="toggleGroupLists(${group.groupId})"` : ''}> ${group.name}</h2>
                        ${group.showLists ? `<div id ="namelists${id}">${groupListView(group.groupId) ?? ''}</div>` : ''}
                </div>
            </div>`
    });

    return html+=`</div>`
}


function groupListView(groupId) {
    let html = '';
    
    model.data.groups.forEach(element => {
        element.showLists = false;
    });

    const groupPath = model.data.groups.find(obj => obj.groupId === groupId)

    groupPath.showLists = true;
    groupPath.lists.forEach(element => {

        html += /*HTML*/`
            <div style="display: flex; align-items: center; justify-content: center">
            <div style="display: flex; flex-wrap: nowrap; align-items: baseline">
            <p style="margin: 5% 0 0 0" onclick="toTheListPage('${element.listType}',${element.listId}, ${groupId})">${element.listName}</p>
            ${model.data.groups.find(obj=>obj.groupId == groupId).adminUserId == model.app.currentUserId ? 
                `<button class="listeKnapper erase" style="font-size: 1rem;" onclick="removeList(${element.listId}, ${groupId})">❌</button>`:''}
            </div>
            </div>
            `
    })
    html += ` ${model.input.createNewList.showInput && model.data.groups[groupId] == groupId ? '' : `<button style = "margin-top:5% "onclick="toggleAddNewListInput()"> Ny liste </button>`}
    ${createNewListView()}`
    return html
}


