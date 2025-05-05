
function createList() {
    if (isBlank(model.input.createNewList.name)) {
        
        model.input.createNewList.errorMessage= "Listen må ha et navn";
       updateView();
       resetErrorMessage(model.input.createNewList, "errorMessage")
        return;
    }
    if (isBlank(model.input.createNewList.typeOfList)) {
        model.input.createNewList.errorMessage= "Du må velge hvilken type listen skal være";
       updateView();
       resetErrorMessage(model.input.createNewList, "errorMessage")
        return;
    }
    if (model.app.currentPage === 'privateListOverview') {
        model.data.users.find(obj => obj.userId == model.app.currentUserId).lists.push(
            {
                listId: createNewId(model.data.users.find(obj => obj.userId == model.app.currentUserId).lists, 'listId'),
                listType: model.input.createNewList.typeOfList,
                isPrivate: true,
                listName: model.input.createNewList.name,
                isCompleted: false,
                listItems: []
            },
        )

    } else if (model.app.currentPage === 'groupsOverview') {
        model.data.groups.find(obj => obj.groupId == model.app.currentGroupId).lists.push(
            {
                listId: createNewId(model.data.groups.find(obj => obj.groupId === model.app.currentGroupId).lists, 'listId'),
                listType: model.input.createNewList.typeOfList,
                listName: model.input.createNewList.name,
                usersCanView: model.data.groups.find(element => element.groupId == model.app.currentGroupId).usersId,
                usersCanEdit: [model.app.currentUserId],
                isCompleted: false,
                listItems: []
            },
        )
    }
    model.input.createNewList.name = '';
    model.input.createNewList.typeOfList = '';
    model.input.createNewList.showInput = false;
    updateView();
};



function toggleAddNewListInput() {
    model.input.createNewList.showInput = !model.input.createNewList.showInput;
    updateView();
}