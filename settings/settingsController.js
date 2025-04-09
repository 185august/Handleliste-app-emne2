// let currentUsersArray = model.data.users //users array
// let currentGroup = currentUserArray[model.app.currentUserId].groupsId//groupid array
// let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object



function removeGroupMember(groupName){
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  
}

function addGroupMember(groupName){
 let newUsername = document.querySelector('#newMemberUsername').value
 if(!newUsername){
  console.log('write username')
  return}
 console.log(document.querySelector('#newMemberUsername'))
 console.log(newUsername)
 let newUser = model.data.users.find(user => user.username === newUsername)// 멤버로 새로 추가할 멤버 오브젝트
 
 const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
 console.log(newUser.userId)
 groupObject.usersId.push(newUser.userId)
 console.log(groupObject.usersId)
  
}

function sendNewUserInfo(data ,type, divId) {
  if(!data){
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

