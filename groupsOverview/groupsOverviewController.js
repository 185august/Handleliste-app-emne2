function toggleGroupLists(whatGroup) {
 
  model.data.groups.find(obj => obj.groupId === whatGroup).showLists = !model.data.groups.find(obj => obj.groupId === whatGroup).showLists
  updateView();
  setTimeout(() => {
    const inputSection = document.querySelector('#toggle-new-group-list');
    if (inputSection) {
      inputSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, 50);
};
function removeList(listId, groupId) {
  let object = '';
  let listIndex = '';
  if (model.app.currentPage == 'privateListOverview') {
    object = model.data.users.find(obj => obj.userId === model.app.currentUserId);
    listIndex = object.lists.findIndex(obj => obj.listId === listId);
  }
  else {
    object = model.data.groups.find(obj => obj.groupId === groupId);
    listIndex = object.lists.findIndex(obj => obj.listId === listId);
  }
  if (listIndex !== -1) {
    object.lists.splice(listIndex, 1);
    updateView();
  }

}

function toTheListPage(listType, listId, groupId) {
  const path = model.data.groups.find(obj => obj.groupId == groupId).lists.find(obj => obj.listId === listId)
  if (listType == 'shoppingList') {
    model.app.currentListPath = path;
    //model.data.users.find(obj => obj.userId === model.app.currentUserId);
    setPage('shoppingList');
  } else {
    model.app.currentListPath = path;
    setPage('wishlist');
  }
}

function printGroupList(groupId) {
  model.data.groups.forEach(element => {
    element.showLists = false;
  });
  
  model.app.currentGroupId = groupId
  groupListView(groupId);
  updateView();
}
