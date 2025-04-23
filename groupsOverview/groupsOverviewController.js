function toggleGroupLists(whatGroup) {
    model.data.groups.find(obj => obj.groupId === whatGroup).showLists = !model.data.groups.find(obj => obj.groupId === whatGroup).showLists
    updateView();
};

