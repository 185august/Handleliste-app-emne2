function setPage(nameOfPage, id) {
    model.app.previousPage.push(nameOfPage)
    model.app.currentPage = nameOfPage;
    updateView(id);
}

function goToPreviousPage(delta) {
    if (delta == -1 && model.app.previousPage.length > 0) {
        model.app.previousPage.pop();
        model.app.currentPage = model.app.previousPage.pop();
        setPage(model.app.currentPage)
    }
    updateView();
}