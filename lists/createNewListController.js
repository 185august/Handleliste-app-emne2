
function createList(){
    // const typeOfList = model.app.previousPage[model.app.previousPage.length -1];
    if(model.app.currentPage ==='privateListOverview'){
        model.data.users.find(element => element.userId == model.app.currentUserId).lists.push(
            {
                listId: createID(model.data.users.find(element => element.userId == model.app.currentUserId).lists),
                listType: model.input.createNewList.typeOfList,
                isPrivate: true,
                listName: model.input.createNewList.name,
                isCompleted: false,
                listItems: []
            },
        )
        // setPage(model.app.currentPage)
    }else if(model.app.currentPage === 'groupsOverview'){
        model.data.groups.find(element => element.groupId == model.app.currentGroupId).lists.push(
            {
                listId: createID(model.data.groups.find(element => element.groupId == model.app.currentGroupId).lists),
                listType: model.input.createNewList.typeOfList,
                listName: model.input.createNewList.name,
                usersCanView: model.data.groups.find(element => element.groupId == model.app.currentGroupId).usersId,
                usersCanEdit: [model.app.currentUserId],
                isCompleted: false,
                listItems: []
            },
        )
        // setPage(model.app.currentPage)
    }
    model.input.createNewList.name = '';
    model.input.createNewList.typeOfList = '';
    model.input.createNewList.showInput = false;
    updateView();
};

//legg denne i modellen: model.app.currentGroupId

function createID(list){
   /*  let newID = Math.floor(Math.random()*1000); */
   let newID = list.length
    if(list.find(element => element.listId == newID)){
        createID(list);
    }else{
        return newID;
    }
}


function toggleAddNewListInput() {
    model.input.createNewList.showInput = !model.input.createNewList.showInput;
    updateView();
}