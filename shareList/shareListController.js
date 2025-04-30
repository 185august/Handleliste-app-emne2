function shareList(groupId){
    const list = model.app.currentListPath
    list.listItems.forEach(element => {
           element.whoAddedItemId= model.app.currentUserId;
    });
    const group = model.data.groups.find(obj=> obj.groupId == groupId);
    const newList = {
        listId:createNewId(group.lists, "listId"),
        listType: list.listType,
        listName: list.listName,
        usersCanView: group.usersId,
        usersCanEdit: group.adminUserId,
        isCompleted: false,
        listItems: list.listItems

    } 
    group.lists.push(newList);
    goToPreviousPage(-1);
}