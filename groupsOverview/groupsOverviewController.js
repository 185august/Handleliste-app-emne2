function toggleGroupLists(whatGroup) {
    model.input.
    model.data.groups.find(obj => obj.groupId === whatGroup).showLists = !model.data.groups.find(obj => obj.groupId === whatGroup).showLists
    updateView();
    setTimeout(() => {
        const inputSection = document.querySelector('#toggle-new-group-list');
        if (inputSection) {
          inputSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, 50);
};
function removeList(listId,groupId){
    const group = model.data.groups.find(obj => obj.groupId === groupId);
    const listIndex = group.lists.findIndex(obj => obj.listId === listId);
    if (listIndex !== -1) {
        group.lists.splice(listIndex, 1);
        updateView();
    }
};
