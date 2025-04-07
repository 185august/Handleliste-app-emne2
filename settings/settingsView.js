let alreadychanging = false
let settingsViewhtml = ''
// 뒤로가기 버튼 동작안함 페이지 오브젝트에 저장하는거 해야할듯 

function settingsView() {
 if(settingsViewhtml){
    let html = /*HTML*/`
    <div class = "page" id = "settingsApp">${settingsViewhtml}
    </div>`
  return html
  }
  if(!settingsViewhtml){ 
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

function profilView(){
  console.log('🔥 settingsViewhtml 내용:', settingsViewhtml);
  let html = /*HTML*/`
  <div class = "page">
  <button  onclick="goToPreviousPage(-1)"><b><</b></button>
    <div style = "text-align: center;">
     <h3>Profil</h3>
     <p onclick = "changeName()">Endre navn</p>
     <p onclick = "changePassword()">Endre passord</p>
     <p onclick = "removeLogg()">Slett handleliste loggen</p>
  `
  html += `<div id = "nameFixInput"></div>
            </div>`
  settingsViewhtml = html
  setPage('settings')
}


function groupSettingsView(){

}

