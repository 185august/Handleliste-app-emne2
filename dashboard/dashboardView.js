let currentUser = model.data.users
let currentGroup = currentUser[model.app.currentUserId].groupsId 

function dashboardView() {
    let hearder = dashboardHeader()
    let recentList = dashboardRecentList()
    let listnames = lists()
    let html = `<div class="dashboard">
    ${hearder + recentList + listnames}</div>`
    return html
}

function lists(){
    let privateList = dashboardPrivateList()
    let groupList = dashboardGroupList()
    let html = `<div style = "display: flex; flex-wrap: nowrap; gap: 1rem">
    ${privateList + groupList}</div>`
    return html
}

function dashboardHeader() {
    let html = /*HTML*/ `
    <div id = "headerbox">
    <h2>${currentUser[model.app.currentUserId].username}</h2>
    <span style="font-size:2.2rem" onclick="setPage('settings')">⚙️</span>
    </div>
    `

    return html
}


function dashboardRecentList() {
    let recentListId = currentUser[model.app.currentUserId].recentListId
    let recentListObject = currentUser[model.app.currentUserId].lists.find(Object => Object.listId === recentListId)

    const recentList = generateList(recentListObject.listItems)
    let html = /*HTML*/ `
    <div id = "recentList" class="dashboardboxes" onclick="printPrivateList(${recentListId})">
    <h3>Siste Endret Lister:</h3>
    <p>${currentUser[model.app.currentUserId].lists[recentListId].listName}</p>
    <div class = "lists">
    ${recentList}
    </div>
    </div>`
    return html
}



function dashboardPrivateList() {
    let nameList = /*HTML*/ `
    <div class = "dashboardboxes" onclick="setPage('privateListOverview')">
    <h3>Private Lister:</h3>
    <ol id = privatelists>`

    let privateListArray = currentUser[model.app.currentUserId].lists

    privateListArray.forEach(element => {
        nameList += `<li>${element.listName}</li>`
    });
    nameList += `</ol>
        </div>`
    return nameList
}

function dashboardGroupList() {
    let currentGroups = []
    currentGroup.forEach(element => {
       const groupObjects = model.data.groups.find(groupElement => groupElement.groupId === element)
        if (groupObjects) { currentGroups.push(groupObjects) }
    })
   
    let groupListName = /*HTML*/ `
    <div class = "dashboardboxes" onclick="setPage('groupsOverview')">
    <h3>Group Lister:</h3>
        <ol id = grouplists>`

    currentGroups.forEach(element => {
        groupListName += `<li>${element.name}</li>`
    });
    groupListName += `</ol>
        </div>`
    return groupListName
}