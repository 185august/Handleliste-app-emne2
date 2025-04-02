<<<<<<< Updated upstream
let newName = null
let fixNameInput = null

function changeName(){
    fixNameInput = document.querySelector('#nameFixInput')
    fixNameInput.innerHTML = /*HTML*/`
 <input type="text" required id="nameInput" oninput = "newName = this.value">
 <button onclick = "sendNewUserName()">send</button>
 `
 alreadychanging = true
 return fixNameInput
=======
let newName = ""
function changeName(){
  let fixNameInput = document.querySelector('#nameFixInput')
    fixNameInput.innerHTML = /*HTML*/`
 <input type="text" required oninput = "newName = this.value">
 <button onclick = "sendNewUserName()">send</button>
 `
 alreadychanging = true
>>>>>>> Stashed changes
}

function sendNewUserName(){
  currentUser.username = newName
  alreadychanging = false
}

