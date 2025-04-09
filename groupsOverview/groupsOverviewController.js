function toggleGroupLists(whatGroup) {
    model.data.groups[whatGroup].showLists = !model.data.groups[whatGroup].showLists
    updateView();
};