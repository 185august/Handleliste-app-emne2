let alreadychanging = false
function settingsView() {
  let html = /*HTML*/`
  <div class = "page">
<<<<<<< Updated upstream
  <span  onclick="goToPreviousPage(-1)"><b><</b></span>
=======
  <span><b><</b></span>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  
  let html = /*HTML*/
    `<p onclick = "changeName()">Endre navn</p>
    `
  
  return html}
=======
  if(alreadychanging){
    return
  }
  else{
  let html = /*HTML*/
  `<p onclick = "changeName()">Endre navn</p>
  `
  return html}
}
>>>>>>> Stashed changes
