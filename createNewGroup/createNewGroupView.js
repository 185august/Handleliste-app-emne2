function createNewGroupView() {
    /*  initializeGroup(); */
    return newListHtml = /*HTML*/`
    <input 
    type="text"
    placeholder="Navn på gruppe"
    value="${model.input.createNewGroup.name ?? ''}"
    oninput="model.input.createNewGroup.name = this.value">
    <br>

    <input 
    type="text"
    placeholder="Brukernavn"
    value="${model.input.createNewGroup.username ?? ''}"
    oninput="model.input.createNewGroup.username = this.value">
    <button onclick="addUserToGroup()">Legg til bruker</button>
    <br>
    <br>
    <button onclick="createNewGroup()">Opprett gruppe</button>
    
`
}