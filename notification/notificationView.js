function notificatonsView() {
    let notificationsHtml = `
    <button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button> <button class ="home" onclick="goToDashboardPage()"></button>
    <div class="container">`
    if (model.data.users.find(obj => obj.userId == model.app.currentUserId).notificatons == null ||
        model.data.users.find(obj => obj.userId == model.app.currentUserId).notificatons == undefined) {
        return notificationsHtml += `<div> You have no notifications</div></div>`
    }
    let messages = ""
    model.data.users.find(obj => obj.userId == model.app.currentUserId).notificatons.forEach(obj =>
        messages += `<div> ${obj.message} 
        <button style="background-color: transparent" onclick="acceptInvite(${obj.messageId}, ${obj.groupId})">✔️</button> 
        <button class="erase" onclick="declineInvite(${obj.messageId})">❌</button>`
    )
    if (messages == "") {
        messages = "Du har ingen ny notifikasjoner"
    }
    notificationsHtml += messages

    return notificationsHtml += `</div>`
}