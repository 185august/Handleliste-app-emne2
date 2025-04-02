    
function groupsOverviewView() {
    
    let html = ''
    let groupList = model.data.users[model.app.currentUserId].groupsId //group id array 
    
        groupList.forEach(id => 
        {const object = model.data.groups.find(groupElement => groupElement.groupId === id)    
            html+= /*HTML*/
       `<div onclick="printGrouplist('${object.groupId}')">
        <h1>${object.name}</h1>
        <div id ="namelists${id}"></div>
        </div>`    
        })
    

    return html
    }
   
    
    function printGrouplist(id){
        let html = ''
        const object = model.data.groups.find(groupElement => groupElement.groupId == id)
        object.lists.forEach(element => {
            html +=/*HTML*/`
            <p onclick="toTheListPage('${element.listType}','${element.listid}')">${element.listName}</p>
            `
       })
        document.querySelector(`#namelists${id}`).innerHTML = html
    };

    function toTheListPage(element,id){
       
        if (element == 'shoppingList') {
            model.data.users[model.app.currentUserId].currentSelectedListId = id;
            setPage('shoppingList');
        } else {
            model.data.users[model.app.currentUserId].currentSelectedListId = id;
            setPage('wishlist');
        }
<<<<<<< Updated upstream
    }// kaller feil funksjon. Dette skal sende deg til general shoppingList. kanskje det firste til den viser.
    }// kaller feil funksjon. Dette skal sende deg til general shoppingList. kanskje det firste til den viser.
