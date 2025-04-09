// let currentUsersArray = model.data.users //users array
// let currentGroup = currentUserArray[model.app.currentUserId].groupsId//groupid array
// let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object

function changeName(divId) {
  let nameDiv = document.querySelector('#'+`${divId}`)
  nameDiv.innerHTML = /*HTML*/`
 <input type="text" required " id="newNameValue">
 <button onclick = "sendNewUserInfo(document.getElementById('newNameValue').value , 'name', nameDiv)">send</button>
 `
 alreadychanging = true
}

function changeGroupMembers(groupName){
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)
  
}

function sendNewUserInfo(data ,type ,divInfo ) {
  if(!data)return
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

function changePassword(divId) {
  let passwordDiv = document.querySelector('#'+`${divId}`)
  console.log(passwordDiv)
  passwordDiv.innerHTML = /*HTML*/`
 <input type="text" required id="newPasswordValue">
 <button onclick = "sendNewUserInfo(document.getElementById('newPasswordValue').value, 'password', passwordDiv)">send</button>
 `
 alreadychanging = true
}
