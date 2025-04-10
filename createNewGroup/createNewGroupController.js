function addUserToGroup() {
    const newMember = model.data.users.find(user => user.username === model.input.createNewGroup.username)
    if (newMember == undefined || newMember == null) alert('bruker eksisterer ikke')
    else {
        /* const newMemberIndex = model.data.users.findIndex(user=> user.username ===model.input.createNewGroup) */
        model.input.createNewGroup.usersInGroup.push(newMember.userId)
        model.input.createNewGroup.username = '';
        updateView();
    }
}


function createNewGroup() {
    if (model.data.groups.find(group => group.name.toLowerCase() === model.input.createNewGroup.name.toLowerCase())) {
        alert('navn eksisterer allerede');
        return;
    } else {
        model.data.groups[model.data.groups.length] = {
            groupId: createNewId(model.data.groups, 'groupId'),
            name: model.input.createNewGroup.name,
            usersId: [model.app.currentUserId, model.input.createNewGroup.usersInGroup],
            adminUserId: model.app.currentUserId,
            showLists: false,
            lists: []
        }
        model.data.users[model.app.currentUserId].groupsId.push(model.data.groups[model.data.groups.length - 1].groupId)

        model.input.createNewGroup.name = ''
        model.input.createNewGroup.username = ''
        model.input.createNewGroup.usersInGroup = [];
        goToPreviousPage(-1);
    }
}