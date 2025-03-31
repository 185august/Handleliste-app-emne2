function dashboardView() {
    let html = /*HTML*/ `
    <div id = "headerbox">
    <h1>${model.data.users[0].username}</h1>
    <span>⚙️</span>
    </div>
    `

    return html
}