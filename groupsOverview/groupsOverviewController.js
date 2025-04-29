function toggleGroupLists(whatGroup) {
    model.data.groups.find(obj => obj.groupId === whatGroup).showLists = !model.data.groups.find(obj => obj.groupId === whatGroup).showLists
    updateView();
};
function removeList(listId,groupId){
    const group = model.data.groups.find(obj => obj.groupId === groupId);
    const listIndex = group.lists.findIndex(obj => obj.listId === listId);
    if (listIndex !== -1) {
        group.lists.splice(listIndex, 1);
        updateView();
    }
};
