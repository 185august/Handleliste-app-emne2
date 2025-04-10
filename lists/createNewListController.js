
function createList() {
    // const typeOfList = model.app.previousPage[model.app.previousPage.length -1];

    if (model.app.currentPage === 'privateListOverview') {
        model.data.users.find(element => element.userId == model.app.currentUserId).lists.push(
            {
                listId: createNewId(model.data.users[model.app.currentUserId].lists, 'listId') /* createID(model.data.users.find(element => element.userId == model.app.currentUserId).lists) */,
                listType: model.input.createNewList.typeOfList,
                isPrivate: true,
                listName: model.input.createNewList.name,
                isCompleted: false,
                listItems: []
            },
        )
        // setPage(model.app.currentPage)
    } else if (model.app.currentPage === 'groupsOverview') {
        model.data.groups.find(element => element.groupId == model.app.currentGroupId).lists.push(
            {
                listId: createNewId(model.data.groups.find(obj => obj.groupId === model.app.currentGroupId).lists, 'listId') /* createID(model.data.groups.find(element => element.groupId == groupIdIndex).lists) */,
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