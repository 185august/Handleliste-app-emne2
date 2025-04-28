function logListView() {
    model.app.currentListPath = model.data.users.find(obj => obj.userId == model.app.currentUserId).log
    let html =/*HTML*/ ` 
    <button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button><button class ="home" onclick="goToDashboardPage()"></button> 
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
    model.data.users.find(obj => obj.userId == model.app.currentUserId).log.forEach(currentLog => {
        html += `<div onclick="showLogItems(${currentLog.listId})">${currentLog.date}</div>`
        html += `<div onclick = "showLogItems(${currentLog.listId})" > ${currentLog.date}</div >
            <div> ${currentLog.listName}</div>
                    ${currentLog.showLog ? renderLogItems(currentLog.listId) : ''}
                    <button onclick="activateList(${currentLog.listId})">aktiver</button>
                    <button class="erase" onclick="deleteListFromLog(${currentLog.listId})">❌</button>
        `
    });
    return html;
}
