// let currentUsersArray = model.data.users //users array
// let currentGroup = currentUserArray[model.app.currentUserId].groupsId//groupid array
// let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object

function logout() {
  model.app = {
    currentPage: 'login',
    previousPage: [],
    currentUserId: null,
    currentListPath: null,
    currentGroupId: null,
  }
  setPage('login')
}


function removeGroupMember(groupName, username) {
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName) //해당 그룹 오브젝트
  const userToRemove = model.data.users.find(user => user.username === username) // 그룹에서 삭제할 유저 오브젝트

  if(groupObject.adminUserId.includes(userToRemove.userId)){
    console.log('admin')
    if(groupObject.usersId.length>=2)
    groupObject.adminUserId[0] = groupObject.usersId.filter(id => id !== userToRemove.userId)[0]
    else{removeGroup(groupName)}
  }
  userToRemove.groupsId = userToRemove.groupsId.filter(groupsId => groupsId !== groupObject.groupId)
  groupObject.usersId = groupObject.usersId.filter(usersId => usersId !== userToRemove.userId)
  changeGroupMembersView(groupName)
}

function addGroupMember(groupName) {
  let newUsername = document.querySelector('#newMemberUsername').value
  if (!newUsername) {
    return
  }// 값 없을 시 입력하시오 출력

  let newUser = model.data.users.find(user => user.username === newUsername)// 멤버로 새로 추가할 멤버 오브젝트
  if (!newUser) { 
    model.input.settings.addNewGroupMemberErrorMessage = "Bruker eksisterer ikke!"
    changeGroupMembersView(groupName)
    resetErrorMessage(groupName);
    return;
   }
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)

  if (groupObject.usersId.some(id => id === newUser.userId)) {
    model.input.settings.addNewGroupMemberErrorMessage = "Bruker er allerede i gruppen!"
    changeGroupMembersView(groupName);
    resetErrorMessage(groupName); 
    return
  }
    // 이미존재하면 추가안하기
  sendNotification(groupObject.groupId, newUser.userId , model.data.users.find(obj=>obj.userId == model.app.currentUserId).username )
 /*  newUser.groupsId.push(groupObject.groupId)
  groupObject.usersId.push(newUser.userId)
  changeGroupMembersView(groupName)
   */
  model.input.settings.addNewGroupMemberErrorMessage = "Bruker er invitert!";
  document.querySelector('#newMemberUsername').innerHTML="";
  changeGroupMembersView(groupName);
  resetErrorMessage(groupName);
}

function sendNewUserInfo(data, type, divId) {
  console.log(data, type, divId)

  if (!data) {
    console.log('no input data')
    return
  }

  let divInfo = document.querySelector(divId)
  switch (type) {
    case 'password':
      currentUser.password = data
      divInfo.innerHTML = ''
      break;
    case 'name':
      currentUser.username = data
      divInfo.innerHTML = ''
      break;
  }

  alreadychanging = false
}
function leaveGroup(groupName) {
  let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  if(groupObject.adminUserId.includes(currentUser.userId)){
    console.log('admin')
    if(groupObject.usersId.length>=2)
    groupObject.adminUserId[0] = groupObject.usersId.filter(id => id !== currentUser.userId)[0]
    else{removeGroup(groupName)}
  }
  currentUser.groupsId = currentUser.groupsId.filter(groupsId => groupsId !== groupObject.groupId)
  groupObject.usersId = groupObject.usersId.filter(usersId => usersId !== currentUser.userId)
  groupSettingsView()

}

function removeGroup(groupName) {
   const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)  //해당 그룹 오브젝트
  groupObject.usersId.forEach(id => 
    {let member = model.data.users.find(user => user.userId === id)
     member.groupsId =  member.groupsId.filter(groupid => groupid !== groupObject.groupId)
    }
)
  model.data.groups = model.data.groups.filter(group => group !== groupObject)

  groupSettingsView()
}

function addGroupMemberErrorMessage() {
  const message = model.input.settings.addNewGroupMemberErrorMessage;
  return message;
}

function resetErrorMessage(groupName){
  setTimeout(() => {
    model.input.settings.addNewGroupMemberErrorMessage= "";
    changeGroupMembersView(groupName);
  }, 1000);
}