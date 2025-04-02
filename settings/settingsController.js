let newName = ""
function changeName(){
  let fixNameInput = document.querySelector('#nameFixInput')
    fixNameInput.innerHTML = /*HTML*/`
 <input type="text" required oninput = "newName = this.value">
 <button onclick = "sendNewUserName()">send</button>
 `
 alreadychanging = true
}

function sendNewUserName(){
  currentUser.username = newName
  alreadychanging = false
}

