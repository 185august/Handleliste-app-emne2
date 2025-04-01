/* function groupsOverviewView() {
let groupList = model.data.users[model.app.currentUserId].groupsId
let groupObject = []
    groupList.forEach(element => 
    {if(model.data.groups.find(groupElement => groupElement.groupId === element))
        groupObject.push()
    })
     += `<div onclick="printGrouplist(${List.groupId})">
    <p>
    <h1>${List.name}</h1>
    </p>
    </div>`
});


let currentGroup = model.data.users[model.app.currentUserId].groupsId // array[0]
currentGroup.forEach(element => 
model.data.groups.find(groupElement => groupElement.groupId === element))

0// function printGrouplist(id){
//     const list = model.data.groups[model.app.currentUserId].lists.find((element)=> element.groupsId.listId == id)
//     if (list.listType == 'shoppingList') {
//         model.data.users[model.app.currentUserId].currentSelectedListId = id;
//         setPage('shoppingList');
//     } else {
//         model.data.users[model.app.currentUserId].currentSelectedListId = id;
//         setPage('wishlist');
//     }
// }; */