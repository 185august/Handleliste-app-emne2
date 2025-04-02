function groupsOverviewView() {
    let html = '<button onclick="goToPreviousPage(-1)"> <- </button>'
    let groupList = model.data.users[model.app.currentUserId].groupsId //group id array 
    let groupObject = [] // group objects
    groupList.forEach(id => {
        const object = model.data.groups.find(groupElement => groupElement.groupId === id)
        html += /*HTML*/`
       <div onclick="printGrouplist('${object.groupId}')">
        <h1>${object.name}</h1>
        <div id ="namelists${id}"></div>
        </div>`
    })


    return html
}


function printGrouplist(groupId) {
    let html = ''
    const object = model.data.groups.find(groupElement => groupElement.groupId == groupId)
    object.lists.forEach(element => {
        html += /*HTML*/`
            <p onclick="toTheListPage('${element.listType}',${element.listId}, ${groupId})">${element.listName}</p>
            `
    })
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
}// kaller feil funksjon. Dette skal sende deg til general shoppingList. kanskje det firste til den viser.
