function setPage(nameOfPage) {
    model.app.previousPage = model.app.currentPage;
    model.app.currentPage = nameOfPage;
    updateView();
}

function goToPreviousPage() {
    model.app.currentPage = model.app.previousPage;
    updateView();
}