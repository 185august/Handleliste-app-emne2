function createNewlistView() {
    let newListHtml=/*HTML*/`
        Navn på listen
        <input 
        type="text"
        placeholder="Navn på listen"
        value="${model.input.createNewlist.name??''}"
        onchange="model.input.createNewList.name = this.value">
        <select value="${model.input.createNewlist.typeOfList??''}" oninput="model.input.createNewList.typeOfList = this.value">
        <option value="shoppingList">Handleliste</option>
        <option value="wishlist">Ønske liste</option>  
        <button onclick="createList()">Add</button>
    `
    return newListHtml;
};


function createList(){
    const typeOfList = model.app.previousPage[model.app.previousPage.length -1];
    if(typeOfList == "privateListOverview"){
        model.data.users.find(element => element.userId == model.app.currentUserId).lists.push(
            {
                listId: createID(model.data.users.find(element => element.id == id).lists),
                listType: model.input.createNewlist.typeOfList,
                isPrivate: true,
                listName: model.input.createNewlist.name,
                isCompleted: false,
                listItems: []
            },
        )
    }else if(typeOfList == "groupsOverview"){
        model.data.groups.find(element => element.groupId == model.app.currentGroupId).lists.push(
            {
                listId: createID(model.data.groups.find(element => element.groupId == id).lists),
                listType: model.input.createNewlist.typeOfList,
                listName: model.input.createNewlist.name,
                usersCanView: model.data.groups.find(element => element.groupId == id).usersId,
                usersCanEdit: [model.app.currentUserId],
                isCompleted: false,
                listItems: []
            },
        )
    }
    
    //clear inputs in model
    //bytt side eller noe
}

//legg denne i modellen: model.app.currentGroupId

function createID(list){
    let newID = Math.floor(Math.random()*1000);
    if(list.find(element => element.id == newID)){
        createID(list);
    }else{
        return newID;
    }
}

function createNewListButton(){
    return /*HTML*/`
    <button onclick="setPage('createNewList')">+</button>
    `;
}

