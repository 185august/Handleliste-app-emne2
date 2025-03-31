function setPage(nameOfPage) {
    model.app.currentPage = nameOfPage;
    updateView();
}