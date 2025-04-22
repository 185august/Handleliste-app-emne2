function addUserToGroup() {
    const newMember = model.data.users.find(user => user.username === model.input.createNewGroup.username)
    if (newMember == undefined || newMember == null) {
        alert('bruker eksisterer ikke');
    }
    else if (newMember.username == model.data.users.find(obj => obj.userId === model.app.currentUserId).username) {
        alert('Du er allerede lagt til i gruppen');
    }
    else if (model.input.createNewGroup.usersInGroup.includes(newMember.userId)) {
        alert('Bruker allerede lagt til');
    }
    else {
        /* const newMemberIndex = model.data.users.findIndex(user=> user.username ===model.input.createNewGroup) */
        model.input.createNewGroup.usersInGroup.push(newMember.userId);
        model.input.createNewGroup.username = '';
        updateView();
    }
}

function initializeGroup() {
    model.data.groups[model.data.groups.length] = {
        groupId: null,
        name: "tempName",
        usersId: [],
        adminUserId: [],
        showLists: false,
        lists: []
    };
}


function createNewGroup() {
    if (model.data.groups.find(group => group.name.toLowerCase() === model.input.createNewGroup.name.toLowerCase())) {
        alert('navn eksisterer allerede');
        return;
    } else {
        const group = model.data.groups[model.data.groups.length - 1];

        model.input.createNewGroup.usersInGroup.push(model.app.currentUserId);

        group.groupId = createNewId(model.data.groups, "groupId");
        group.name = model.input.createNewGroup.name;
        group.usersId.push(model.input.createNewGroup.usersInGroup);
        group.adminUserId.push(model.app.currentUserId);

        model.input.createNewGroup.usersInGroup.forEach(id => {
            model.data.users.find(obj => obj.userId == id).groupsId.push(group.groupId);
        });
        model.input.createNewGroup.name = '';
        model.input.createNewGroup.username = '';
        model.input.createNewGroup.usersInGroup = [];
        goToPreviousPage(-1);
    }

}