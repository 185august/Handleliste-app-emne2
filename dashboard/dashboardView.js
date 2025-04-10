let currentUserArray = model.data.users //users array
let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object

function dashboardView() {
    let header = dashboardHeader()
    let recentList = dashboardRecentList()
    let listnames = lists()
    let html = `
    <div class="page">
    ${header + recentList + listnames}</div>`
    return html
}

function lists() {
    let privateList = dashboardPrivateList()
    let groupList = dashboardGroupList()
    let html = `<div style = "display: flex; flex-wrap: nowrap; gap: 1rem">
    ${privateList + groupList}</div>`
    return html
}

function dashboardHeader() {
    let html = /*HTML*/ `
    <div class = "headerbox">
    <h2>${currentUserArray[model.app.currentUserId].username}</h2>
    <span style="font-size:2.2rem" onclick="setPage('settings')">⚙️</span>
    </div>
    `

    return html
}


function dashboardRecentList() {
    let recentListId = currentUserArray[model.app.currentUserId].recentListId
    let recentListObject = currentUserArray[model.app.currentUserId].lists.find(Object => Object.listId === recentListId)
    let html;
    if (recentListObject == undefined) return html = /*HTML*/ `
    <div id = "recentList" class="dashboardboxes">
    <h3>Siste Endret Lister:</h3>
    <p>Ingen sist endret liste</p>
    </div>`

    const recentList = generateList(recentListObject.listItems)

    html = /*HTML*/ `
    <div id = "recentList" class="dashboardboxes" onclick="printPrivateList(${recentListId})">
    <h3>Siste Endret Lister:</h3>
    <p>${currentUserArray[model.app.currentUserId].lists[recentListId].listName}</p>
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

    let privateListArray = currentUserArray[model.app.currentUserId].lists

    privateListArray.forEach(element => {
        nameList += `<li>${element.listName}</li>`
    });
    nameList += `</ol>
        </div>`
    return nameList
}

function dashboardGroupList() {
    let currentGroups = []
    currentUserArray[model.app.currentUserId].groupsId.forEach(element => {
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