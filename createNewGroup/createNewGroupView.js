function createNewGroupView() {

    return newListHtml = /*HTML*/`

    <div class="headerbox">
        <button class ="previousPageButton" onclick="goToPreviousPage(-1)"></button>
        <button class ="home" onclick="goToDashboardPage()"></button>
    </div>
    <div style=" position: absolute; left: 48%; bottom: 78%; transform: translateX(-50%); ">
    
    <input 
    type="text"
    placeholder="Navn på gruppe"
    value="${model.input.createNewGroup.name ?? ''}"
    oninput="model.input.createNewGroup.name = this.value">
    <br>
    
    <div style = "display:flex; align-items: center;  white-space: nowrap">
    <input 
    type="text"
    placeholder="Brukernavn"
    value="${model.input.createNewGroup.username ?? ''}"
    oninput="model.input.createNewGroup.username = this.value"> <button onclick="addUserToGroup()">Legg til bruker</button>
    <br>
    <br>
</div>

     <div style="text-align: center">
    <button onclick="createNewGroup()">Opprett gruppe</button>
    </div>

    </div>
`
}