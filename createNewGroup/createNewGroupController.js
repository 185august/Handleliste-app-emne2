function addUserToGroup() {
    const newMember = model.data.users.find(user => user.username === model.input.createNewGroup.username)
    if (newMember == undefined || newMember == null) {
        model.input.createNewGroup.errorMessage="bruker eksisterer ikke";
        updateView();
        resetErrorMessage(model.input.createNewGroup, "errorMessage");
    }
    else if (newMember.username == model.data.users.find(obj => obj.userId === model.app.currentUserId).username) {
        model.input.createNewGroup.errorMessage="Du er allerede lagt til i gruppen";
        updateView();
        resetErrorMessage(model.input.createNewGroup, "errorMessage");
    }
    else if (model.input.createNewGroup.usersInGroup.includes(newMember.userId)) {
       model.input.createNewGroup.errorMessage= "Bruker allerede lagt til";
       updateView();
       resetErrorMessage(model.input.createNewGroup, "errorMessage");
    }
    else {
        model.input.createNewGroup.usersInGroup.push(newMember.userId);
        model.input.createNewGroup.username = '';
        model.input.createNewGroup.errorMessage= "Bruker er invitert!";
        updateView();
        resetErrorMessage(model.input.createNewGroup, "errorMessage");
    }
}

function createNewGroup() {
    if (isBlank(model.input.createNewGroup.name)) {
        model.input.createNewGroup.errorMessage= "Gruppen trenger et navn";
        updateView();
        resetErrorMessage(model.input.createNewGroup, "errorMessage");
        return;
    }
    if (model.data.groups.find(group => group.name.toLowerCase() === model.input.createNewGroup.name.toLowerCase())) {
        model.input.createNewGroup.errorMessage="navn eksisterer allerede";
        updateView();
        resetErrorMessage(model.input.createNewGroup, "errorMessage");
        return;
    }
    const newGroup = {
        groupId: createNewId(model.data.groups, "groupId"),
        name: model.input.createNewGroup.name,
        usersId: [model.app.currentUserId],
        adminUserId: [model.app.currentUserId],
        showLists: false,
        lists: [],
        log:[],
    };
    model.data.groups.push(newGroup);
    model.data.users.find(obj => obj.userId == model.app.currentUserId).groupsId.push(newGroup.groupId);

    model.input.createNewGroup.usersInGroup.forEach(userId => {
        const user = model.data.users.find(obj => obj.userId == userId);
        if (user && !user.groupsId.includes(newGroup.groupId)) {
            sendNotification(newGroup.groupId, user.userId, model.data.users.find(obj => obj.userId == model.app.currentUserId).username)
        }
    });

    /*  model.input.createNewGroup.usersInGroup.forEach(id => {
         model.data.users.find(obj => obj.userId == id).groupsId.push(group.groupId);
     }); */
    model.input.createNewGroup.name = '';
    model.input.createNewGroup.username = '';
    model.input.createNewGroup.usersInGroup = [];
    goToPreviousPage(-1);
}

function clearNewGroup() {
    model.input.createNewGroup.name = '';
    model.input.createNewGroup.username = '';
    model.input.createNewGroup.usersInGroup = [];
}
