let alreadychanging = false
function settingsView() {
  let html = /*HTML*/`
  <div class = "page">
  <button  onclick="goToPreviousPage(-1)"><b><</b></button>
    <div style = "text-align: center;">
     <h3>Profil</h3>
   
  `
  let Namepage = Name()
  html += Namepage + `</div>`
  html += `<div id = "nameFixInput"></div>
            </div>`
  
  return html
}
function Name(){
  if(alreadychanging){
    return
  }
  else{
  let html = /*HTML*/
  `<p onclick = "changeName()">Endre navn</p>
  `
  return html}
}
