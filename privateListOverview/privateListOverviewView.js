function privateListOverviewView() {
let privateList = '';
model.data.users[model.app.currentUserId].lists.forEach(List => {
    privateList += `<div onclick="printPrivateList(${List.listId})">
    <h1>${List.listName}</h1>
    <p>
    ${List.listType}
    </p>
    </div>`
});
return privateList
}
function printPrivateList(id) {
    let html = `<ul>`;
    const list = model.data.users[model.app.currentUserId].lists.find((element)=>element.listId == id)
    list.listItems.forEach(element=>{
        html+= `<li>${element.name}</li>`
    })
    html += `</ul>`
    console.log(html)
};
