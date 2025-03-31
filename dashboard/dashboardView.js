let currentUser = model.data.users
let currentGroup = model.data.groups
function dashboardView() {
    let hearder = dashboardHeader()
    let recentList = dashboardRecentList()
    //let privateList = dashboardPrivateList()
    hearder + recentList //+ privateList
    return hearder + recentList //+privateList
}

function dashboardHeader() {
    let html = /*HTML*/ `
    <div id = "headerbox">
    <h1>${currentUser[0].username}</h1>
    <span>⚙️</span>
    </div>
    `

    return html
}


function dashboardRecentList() {
    let recentListId = currentUser[0].recentListId
    let recentListObject = currentUser[0].lists.find(Object => Object.listId === recentListId)

    const recentList= generateList(recentListObject.listItems)
    let html = /*HTML*/ `
    <div id = "recentList">
    <h1>Private Lister:</h1>
    <p>${currentUser[0].lists[recentListId].listName}</p>
    <div class = "lists">
    ${recentList}
    </div>
    </div>
    `
    return html
}



function generateList(listItems) {
    let rows = ''
    for (let i = 0; i < listItems.length; i++) {
        const name = listItems[i].name;
        const amount = listItems[i].amount;

        rows += /*HTML */`
            <tr>
                <td>
                    ${name}
                </td>
                <td>
                    ${amount}
                </td>
            </tr>
        `
    }

    let recentList = /*HTML*/
        `
    <table class = "List">
        <tr>
            <th>Varer</th>
            <th>Antall</th>
            ${rows}
        </tr>
    </table>
    `

    return recentList
}

