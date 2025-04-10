// let currentUsersArray = model.data.users //users array
// let currentGroup = currentUserArray[model.app.currentUserId].groupsId//groupid array
// let currentUser = currentUserArray.find(Element => Element.userId == model.app.currentUserId)//object



function removeGroupMember(groupName,username){
  const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName) //해당 그룹 오브젝트
  const userToRemove = model.data.users.find(user=>user.username === username) // 그룹에서 삭제할 유저 오브젝트

  userToRemove.groupsId = userToRemove.groupsId.filter(groupsId => groupsId !== groupObject.groupId)
  groupObject.usersId = groupObject.usersId.filter(usersId => usersId !== userToRemove.userId)
  changeGroupMembersView(groupName)
}

function addGroupMember(groupName){
 let newUsername = document.querySelector('#newMemberUsername').value

 if(!newUsername){
  console.log('write username')
  return}// 값 없을 시 입력하시오 출력

 let newUser = model.data.users.find(user => user.username === newUsername)// 멤버로 새로 추가할 멤버 오브젝트

 const groupObject = model.data.groups.find(groupElement => groupElement.name === groupName)

 if(groupObject.usersId.some(id=>id===newUser.userId)) return// 이미존재하면 추가안하기

 newUser.groupsId.push(groupObject.groupId)
 groupObject.usersId.push(newUser.userId)

}

function sendNewUserInfo(data ,type, divId) {
  console.log(data ,type, divId)

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

