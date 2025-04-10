function logListView() {
    model.app.currentListPath = model.data.users[model.app.currentUserId].log
    const currentUser = model.data.users[model.app.currentUserId];
    let html =/*HTML*/ ` 
    <button onclick="goToPreviousPage(-1)"> <- </button>
    <div class="container">
    <h1>Log Liste</h1>
    <br>
    ${renderLogs()}
    </div>
`
    return html;
}

function renderLogs() {
    let html = '';
    model.data.users[model.app.currentUserId].log.forEach(currentLog => {
        html += `<div>${currentLog.date}</div>
                    <div> ${currentLog.listName}</div>
            ${renderLogItems(currentLog.listId)}
            <button onclick="deleteListFromLog(${currentLog.listId})">X</button>
                `
    });
    return html;
}
