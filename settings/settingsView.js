// let currentUsersArray = model.data.users //users array
// let currentGroup = currentUserArray[model.app.currentUserId].groupsId//groupid array
// let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object

// group instilling 에서 그룹에 그룹삭제빼곤 완성! 

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
  <button  class ="previousPageButton" onclick="goToPreviousPage(-1)"></button>
    <div style = "text-align: center;">
     <h3>Bruker innstillinger</h3>
     <p onclick="profilView()">Profil</p>
     <p onclick="groupSettingsView()">Grupper</p>
     <p onclick="logout()">Logg ut</p>
    </div>
    <button class ="home" onclick="goToDashboardPage()"></button>`
    return html
  }
}

function profilView() {

  let html = /*HTML*/`
  <div class = "page">
  <button class ="previousPageButton" onclick="settingsView('back'); updateView()"></button>
    <div style = "text-align: center;">
     <h3>Profil</h3>
     <p onclick = "changeNameSector('nameDiv')">Endre navn</p>
      <div id = "nameDiv"></div>
     <p onclick = "changePasswordSector('passwordDiv')">Endre passord</p>
      <div id = "passwordDiv"></div>
     <p onclick = "setPage('logList')">Logg</p>

     <button class ="home" onclick="goToDashboardPage()"></button>    
  `
  html += ` </div>`
  settingsViewhtml = html
  updateView()
}

function changePasswordSector() {
  let passwordDiv = document.querySelector('#passwordDiv')
  console.log(passwordDiv)
  passwordDiv.innerHTML = /*HTML*/`
 <input type="text" required id="newPasswordValue">
 <button onclick = "sendNewUserInfo(document.querySelector('#newPasswordValue').value, 'password','#passwordDiv')">send</button>
 `
  alreadychanging = true
}

function changeNameSector() {
  let nameDiv = document.querySelector('#nameDiv')
  nameDiv.innerHTML = /*HTML*/`
 <input type="text" required " id="newNameValue">
 <button onclick = "sendNewUserInfo(document.querySelector('#newNameValue').value , 'name','#nameDiv')">send</button>
 `
  alreadychanging = true
}

function groupSettingsView() {
  let currentGroups = []
  currentUserArray.find(obj => obj.userId == model.app.currentUserId).groupsId.forEach(element => {
    const groupObjects = model.data.groups.find(groupElement => groupElement.groupId === element)
    if (groupObjects) { currentGroups.push(groupObjects) }
  })
  let groupListName = `<ul style = 'list-style: none; padding: 0'>`
  currentGroups.forEach(element => {
    groupListName += `<li onclick="GroupSettingsPages('${element.name}')"><h4>${element.name}</h4></li>
                         <div id="group${element.groupId}"></div>`//해당함수랑이름전달
  });
  groupListName += `</ul>`
  let html = /*HTML*/`
  <div class = "page">
  <button class ="previousPageButton" onclick="settingsView('back'); updateView()"></button>
    <div style = "text-align: center;">
     <h3>Gruppe innstillinger</h3>
     ${groupListName}

  <button class ="home" onclick="goToDashboardPage()"></button>
  `
  settingsViewhtml = html
  updateView()
}

function GroupSettingsPages(groupName) {
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  let div = document.querySelector(`#group${groupObject.groupId}`)
  let groupname = groupObject.name

  if (model.app.currentUserId === groupObject.adminUserId[0]) {
    div.innerHTML = /*HTML*/`
                     <p onclick = "leaveGroup('${groupname}')">Forlat</p>
                      <div id = "leaveGroupDiv"></div>
                     <p onclick = "changeGroupMembersView('${groupname}')">Endre</p>
                      <div id = "changeGroupMembersDiv"></div>
                     <p onclick = "removeGroup('${groupname}')">slett</p>
                      <div id = "removeGroupDiv"></div>
                `}
  else {
    div.innerHTML = /*HTML*/`
                       <p onclick = "leaveGroup('${groupname}')">Forlat</p>
                        <div id = "leaveGroupDiv"></div>
                  `}
}


function changeGroupMembersView(groupName) {
 
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
   if(!groupObject) return
  let groupMembers = `<ul style = 'list-style: none; padding : 0'>`
  groupObject.usersId.forEach(element => {
    let userInfo = model.data.users.find(user => user.userId === element)
    if (!userInfo) {
      console.warn(`No user data for ID ${element}`);
      return;
    }
    groupMembers +=/*HTML*/`<li><p>${userInfo.username} <button class="erase" onclick="removeGroupMember('${groupName}','${userInfo.username}')">❌</button></p></li>
                            `
  }
  );
  groupMembers += `</ul>
                  <button class = "plus" onclick="addGroupMemberView('${groupName}')" style ="font-size:2em">✚</button>
                  <div id='newMembername'></div>`


  let html = /*HTML*/`
  <div class = "page">
  <button class ="previousPageButton" onclick="groupSettingsView()"></button>
    <div style = "text-align: center;">
     <h3>${groupName}</h3>
     ${groupMembers}
     <button class ="home" onclick="goToDashboardPage()"></button>
  `
  settingsViewhtml = html
  updateView()
  
}

function addGroupMemberView(groupName) {
  let div = document.querySelector('#newMembername')
  div.innerHTML = `
  <input type='text' required id="newMemberUsername">
  <button onclick="addGroupMember('${groupName}')">registere</button>
  `
 
}