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
     <h2>Bruker innstillinger</h2>
     <br>
      <div class="divforstyle">
        <p class="listeBoks" onclick="profilView()">Profil</p>
      </div>
        <div class="divforstyle">
        <p class="listeBoks" onclick="groupSettingsView()">Grupper</p>
      </div>  
        <div class="divforstyle">
        <p class="listeBoks" onclick="logout()">Logg ut</p>
      </div>
    </div>
    <button class ="home" onclick="goToDashboardPage()"></button>`
    return html
  }
}

function profilView() {

  let html = /*HTML*/`
  <div class = "page">
  <button class ="previousPageButton" onclick="settingsView('back'); updateView()"></button>
    <div  style = "text-align: center;">
     <h3>Profil</h3>
     <div class="divforstyle">
     <div class="listeBoks">
    <p onclick = "changeNameSector('nameDiv')">Endre navn</p>
      <div id = "nameDiv"></div>
    </div>
    </div>
    <div class="divforstyle">
    <div class="listeBoks">
    <p onclick = "changePasswordSector('passwordDiv')">Endre passord</p>
      <div id = "passwordDiv"></div>
      </div>
      </div>
      <div class="divforstyle">
      <div class="listeBoks">
    <p onclick="setPage('favoriteItems')">Favoritt varer</p>
    </div>
    </div>
    <div class="divforstyle">
    <div class="listeBoks">
    <p onclick = "setPage('logList')">Vis handle logg</p>
    </div>
    </div>
     <button class ="home" onclick="goToDashboardPage()"></button>    
  `
  html += ` </div>`
  settingsViewhtml = html
  updateView()
}

function changePasswordSector() {
  let passwordDiv = document.querySelector('#passwordDiv')
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
    groupListName += `
    <div class="divforstyle">
    <div class="listeBoks">
    <li onclick="GroupSettingsPages('${element.name}')"><h3 style="margin:0">${element.name}</h3></li>
                         <div id="group${element.groupId}"></div>
                         </div></div>`
  });
  groupListName += `</ul>`
  let html = /*HTML*/`
  <div class = "page">
  <button class ="previousPageButton" onclick="specialBackspaceButton()"></button>
    <div style = "text-align: center;">
     <h2>Gruppeinnstillinger</h2>
     ${groupListName}

  <button class ="home" onclick="goToDashboardPage()"></button>
  `
  settingsViewhtml = html
  updateView()
}
function specialBackspaceButton() {
  if (model.app.previousPage[model.app.previousPage.length - 2] === 'groupsOverview') {
    setPage('groupsOverview')
    updateView()
    model.app.previousPage.splice(model.app.previousPage.length - 3, 2)
    return
  }
  settingsView('back'); updateView()
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
                      <p onclick="gotoGroupLog(${groupObject.groupId})">Log</p>
                     <p style="color: red"onclick = "removeGroup('${groupname}')">Slett</p>
                      <div id = "removeGroupDiv"></div>
                `}
  else {
    div.innerHTML = /*HTML*/`
                      <p onclick="gotoGroupLog(${groupObject.groupId})">Vis logg</p>
                       <p onclick = "leaveGroup('${groupname}')">Forlat</p>
                        <div id = "leaveGroupDiv"></div>
                  `}
}


function changeGroupMembersView(groupName) {

  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  if (!groupObject) return
  let groupMembers = `<ul style = 'list-style: none; padding : 0'>`
  groupObject.usersId.forEach(element => {
    let userInfo = model.data.users.find(user => user.userId === element)
    if (!userInfo) {
      console.warn(`No user data for ID ${element}`);
      return;
    }
    groupMembers +=/*HTML*/`<li><p style="font-size:1.2rem">${userInfo.username} <button class="erase" onclick="removeGroupMember('${groupName}','${userInfo.username}')">❌</button></p></li>
                            `
  }
  );
  groupMembers += `</ul>
                  
                  <button class = "plus" onclick="addGroupMemberView('${groupName}')" style ="font-size:2em">✚</button>
                  <div> ${errorMessage(model.input.settings.addNewGroupMemberErrorMessage)}</div>
                  <div id='newMembername'></div>
                  `


  let html = /*HTML*/`
  <div class = "page">
  <button class ="previousPageButton" onclick="groupSettingsView()"></button>
    <div style = "text-align: center;">
     <h2>${groupName}</h2>
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
  <button onclick="addGroupMember('${groupName}')">Inviter</button> 
  
  `

}