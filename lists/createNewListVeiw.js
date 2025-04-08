function createNewListView() {
    let newListHtml;
    if(model.input.createNewList.showInput){
        return newListHtml = /*HTML*/`
            <input 
            type="text"
            placeholder="Ny liste"
            value="${model.input.createNewList.name ?? ''}"
            oninput="model.input.createNewList.name = this.value">
            <select value="${model.input.createNewList.typeOfList??''}" oninput="model.input.createNewList.typeOfList = this.value">
            <option value="shoppingList">Handleliste</option>
            <option value="wishlist">Ønske liste</option> 
            </select>
            <button onclick="createList()">Add</button>
            
        `
    
    }else return ''
};


function createNewListButton(){
    return /*HTML*/`
    <button onclick="setPage('createNewList')">+</button>
    `;
}

