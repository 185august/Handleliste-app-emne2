function createNewListView() {
    let newListHtml;
    if (model.input.createNewList.showInput) {
        return newListHtml = /*HTML*/`
            <input 
            type="text"
            placeholder="Ny liste"
            value="${model.input.createNewList.name ?? ''}"
            oninput="model.input.createNewList.name = this.value">
            <select value="${model.input.createNewList.typeOfList ?? ''}" placeholder="velg type liste" oninput="model.input.createNewList.typeOfList = this.value">
            <option value="">Velg en type</option>
            <option value="shoppingList">Handleliste</option>
            <option value="wishlist">Ønskeliste</option> 
            </select>
            <button onclick="createList()">Opprett ny liste</button>
            <div class="divforstyle"> ${errorMessage(model.input.createNewList.errorMessage)?? ''}</div>
            
        `

    } else return ''
};


function createNewListButton() {
    return /*HTML*/`
    <button class = "plus"onclick="setPage('createNewList')" style ="font-size:2em">✚</button>
    `;
}

