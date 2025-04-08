function createNewlistView() {
    let newListHtml=/*HTML*/`
        Navn på listen
        <input 
        type="text"
        placeholder="Navn på listen"
        value="${model.input.createNewList.name ?? ''}"
        oninput="model.input.createNewList.name = this.value">
        <select value="${model.input.createNewList.typeOfList??''}" oninput="model.input.createNewList.typeOfList = this.value">
        <option value="shoppingList">Handleliste</option>
        <option value="wishlist">Ønske liste</option> 
        </select>
        <button onclick="createList()">Add</button>
        
    `
    return newListHtml;
};


function createList(){
    const typeOfList = model.app.previousPage[model.app.previousPage.length -1];
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
        setPage(model.app.currentPage)
    }else if(model.app.currentPage === 'groupsOverview'){
        model.data.groups.find(element => element.groupId == model.app.currentGroupId).lists.push(
            {
                listId: createID(model.data.groups.find(element => element.groupId == id).lists),
                listType: model.input.createNewList.typeOfList,
                listName: model.input.createNewList.name,
                usersCanView: model.data.groups.find(element => element.groupId == id).usersId,
                usersCanEdit: [model.app.currentUserId],
                isCompleted: false,
                listItems: []
            },
        )
        setPage(model.app.currentPage)
    }
    //clear inputs in model
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

function createNewListButton(){
    return /*HTML*/`
    <button onclick="setPage('createNewList')">+</button>
    `;
}

