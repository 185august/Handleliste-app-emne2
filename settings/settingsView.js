// let currentUsersArray = model.data.users //users array
// let currentGroup = currentUserArray[model.app.currentUserId].groupsId//groupid array
// let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object


let alreadychanging = false
let settingsViewhtml = ''


function settingsView(back = '') {
  if (back === 'back') {
    settingsViewhtml = ''
  }

  if (settingsViewhtml) {
    let html = /*HTML*/`
    <div class = "page" id = "settingsApp">${settingsViewhtml}
    </div>`
    return html
  }
  if (!settingsViewhtml) {
    let html = /*HTML*/`
  <div class = "page" id = "settingsApp">
  <span  onclick="goToPreviousPage(-1)"><b><</b></span>
    <div style = "text-align: center;">
     <h3>Bruker innstillinger</h3>
     <p onclick="profilView()">Profil</p>
     <p onclick="groupSettingsView()">Grupper</p>
     <div id = "nameFixInput"></div>
    </div>`
    return html
  }

}

function profilView() {

  let html = /*HTML*/`
  <div class = "page">
  <button  onclick="settingsView('back'); updateView()"><b><</b></button>
    <div style = "text-align: center;">
     <h3>Profil</h3>
     <p onclick = "changeName('nameDiv')">Endre navn</p>
      <div id = "nameDiv"></div>
     <p onclick = "changePassword('PasswordDiv')">Endre passord</p>
      <div id = "PasswordDiv"></div>
     <p onclick = "setPage('logList')">Logg</p>

      
  `
  html += ` </div>`
  settingsViewhtml = html
  updateView()
}


function groupSettingsView() {
  let currentGroups = []
  currentUserArray[model.app.currentUserId].groupsId.forEach(element => {
    const groupObjects = model.data.groups.find(groupElement => groupElement.groupId === element)
    if (groupObjects) { currentGroups.push(groupObjects) }
  })
  let groupListName = `<ul style = 'list-style: none'>`
  currentGroups.forEach(element => {
    groupListName += `<li onclick="GroupSettingsPages('${element.name}')"><h4>${element.name}</h4></li>
                         <div id="group${element.groupId}"></div>`//해당함수랑이름전달
  });
  groupListName += `</ul>`
  let html = /*HTML*/`
  <div class = "page">
  <button  onclick="settingsView('back'); updateView()"><b><</b></button>
    <div style = "text-align: center;">
     <h3>Gruppe innstillinger</h3>
     ${groupListName}
  `
  settingsViewhtml = html
  updateView()
}

function GroupSettingsPages(groupName) {
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  let div = document.querySelector(`#group${groupObject.groupId}`)
  let groupname = groupObject.name

  if(model.app.currentUserId=== groupObject.adminUserId[0]){
  div.innerHTML = /*HTML*/`
                     <p onclick = "leaveGroup('${groupname}')">Forlat</p>
                      <div id = "leaveGroupDiv"></div>
                     <p onclick = "changeGroupMembersView('${groupname}')">Endre</p>
                      <div id = "changeGroupMembersDiv"></div>
                     <p onclick = "removeGroupDiv('${groupname}')">slett</p>
                      <div id = "removeGroupDiv"></div>
                `}
  else{
    div.innerHTML = /*HTML*/`
                       <p onclick = "leaveGroup('${groupname}')">Forlat</p>
                        <div id = "leaveGroupDiv"></div>
                  `}
  }

function leaveGroup(groupName){
 
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  currentUser.groupsId = currentUser.groupsId.filter(groupsId => groupsId !== groupObject.groupId)
  groupObject.usersId = groupObject.usersId.filter(usersId => usersId !== currentUser.userId)
  groupSettingsView()

}

function changeGroupMembersView(groupName){
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  let groupMembers = `<ul style = 'list-style: none'>`
  groupObject.usersId.forEach(element => 
  {let userInfo = model.data.users.find(user =>user.userId === element)
    if (!userInfo) {
      console.warn(`No user data for ID ${element}`);
      return;
    }
    groupMembers +=/*HTML*/`<li><p>${userInfo.username}</p></li><button>X</button>`}
  );
  groupMembers +=`</ul>`


  let html = /*HTML*/`
  <div class = "page">
  <button  onclick="settingsView('back'); updateView()"><b><</b></button>
    <div style = "text-align: center;">
     <h3>${groupName}</h3>
     ${groupMembers}
  `
  settingsViewhtml = html
  updateView()
}