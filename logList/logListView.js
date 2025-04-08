function logListView() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html =/*HTML*/ ` 
    <button onclick="goToPreviousPage(-1)"> <- </button>
    <div class="container">
    <h1 style=" background-color: lightblue">Log Liste</h1>
    <br>
    ${renderLogs()}
    </div>
`
    return html;
}

function renderLogs() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html = '';
    currentUser.log.forEach(date => {
        model.app.currentListPath = date;
        currentUser.log[date.listId]
        html += `<div>${date.date}</div>
                    <div> ${date.listName}</div>
            ${renderListItems(currentUser.log[date.listId])}
                `
    });
    return html;
}
