function logListView() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html =/*HTML*/ ` 
    <button onclick="goToPreviousPage()"> <- </button>
    <div class="container">
    <h1 style=" background-color: lightblue">Log Liste</h1>
    <br>
    ${renderLogs()}
`
    return html;
}

function renderLogs() {
    const currentUser = model.data.users[model.app.currentUserId];
    let html = '';
    currentUser.log.forEach(date => {
        console.log(date.listId)
        html += `<div>${date.date}</div>
            ${renderListItems(currentUser.log[date.listId])}
                `
    });
    return html;
}
