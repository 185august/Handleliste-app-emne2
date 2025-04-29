function sendNotification(groupId, invitedUserId, invitedByUser) {
    const group = model.data.groups.find(obj => obj.groupId == groupId)
    if(group.usersId.includes(invitedUserId)){
        alert("Bruker er allerede i gruppen");
        return;
    }
    model.data.users.find(obj => obj.userId == invitedUserId).notificatons.push({
        messageId: createNewId(model.data.users.find(obj => obj.userId == invitedUserId).notificatons, 'messageId'),
        message: `Du har blitt invitert til å bli med i gruppe: ${group.name} <br> av: ${invitedByUser}`,
        groupId: groupId
    });
}

function acceptInvite(messageId, groupId) {
    if(model.data.groups.find(obj=> obj.groupId== groupId).usersId.includes(model.app.currentUserId)){
        alert("Du er allerede medlem av gruppen")
        declineInvite(messageId);
        updateView();
    }
    const user = model.data.users.find(obj => obj.userId == model.app.currentUserId)
    user.groupsId.push(groupId);
    model.data.groups.find(obj => obj.groupId == groupId).usersId.push(user.userId)
    user.notificatons.splice(user.notificatons.findIndex(obj => obj.messageId == messageId), 1)
    updateView();
}
function numberOfNotifications() {
    let amount = 0;
    model.data.users.find(obj => obj.userId == model.app.currentUserId).notificatons.forEach(item => amount++)
    return amount;
}

function declineInvite(messageId) {
    const user = model.data.users.find(obj => obj.userId == model.app.currentUserId)
    user.notificatons.splice(
        user.notificatons.findIndex(obj => obj.messageId == messageId), 1
    );
    updateView();
}